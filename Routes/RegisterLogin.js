const router = require("express").Router();
const Jwt = require("jsonwebtoken"); //JWT
const userSchema = require("../Model/User.schema");
const { registrationValidation, loginValidation } = require("../validation");

const numberDigitConversion = (num, len) => {
    return (
        (num + Math.floor(Math.random() * 1e16)).slice(0, len - 13).toString() +
        new Date().getTime()
    )
        .toString()
        .split("")
        .reverse()
        .join("")
        .slice(0, len);
};

router.post("/register", async (req, res) => {
    let validate;
    try {
        validate = await registrationValidation.validateAsync(req.body);
    } catch (e) {
        console.error(e);
        return res.status(400).send({ message: e.details[0].message });
    }
    if (validate.error)
        return res.status(400).send({ message: validate.details[0].message });
    let userdata = req.body;
    const user = await userSchema.findOne({ email: userdata.email });
    const phonenumber = await userSchema.findOne({
        phone_number: userdata.phone_number,
    });

    userdata = {
        ...userdata,
        card_details: {
            number: numberDigitConversion(process.env.CREDIT_CARD_HASH, 16),
            expires: new Date(
                new Date().getFullYear() + 3,
                new Date().getMonth(),
                new Date().getDate()
            ),
            cvv: parseInt(new Date().getTime().toString().slice(0, 3)),
        },
        account_number: numberDigitConversion(process.env.ACCOUNT_ID_HASH, 12),
        wallet_id: numberDigitConversion(process.env.WALLET_ID_HASH, 16),
    };

    if (user || phonenumber) {
        return res
            .status(303)
            .send("User has been already registered please login to continue");
    } else {
        const newuser = new userSchema(userdata);
        await newuser.save();
        return res.send({ id: newuser._id });
    }
});

router.post("/getUserData", async (req, res) => {
    let user = await userSchema.findById(req.body.id);
    if (user) res.send(user);
    else res.status(404).send("User Not Found");
});

router.post("/login", async (req, res) => {
    console.log(res.body);
    try {
        let validate;
        try {
            validate = await loginValidation.validateAsync(req.body);
        } catch (e) {
            console.error(e);
            return res.status(400).send({ message: e.details[0].message });
        }
        if (validate.error)
            return res
                .status(400)
                .send({ message: validate.details[0].message });

        const { email, password } = req.body;
        let userdata = await userSchema.findOne({
            email,
            password,
            isSuspended: false,
        });
        if (userdata) {
            res.send(userdata);
        } else {
            return res
                .status(404)
                .send({ message: "Email (OR) Password Error" });
        }
    } catch (error) {
        res.send({ message: "Error Sending", error: error });
    }
});

module.exports = router;
