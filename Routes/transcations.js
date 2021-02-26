const router = require("express").Router();
const { transcationValidation } = require("../validation");
const transcationSchema = require("./../Model/Trancsations.schema");
const userSchema = require("./../Model/User.schema");

router.post("/addFund", async (req, res) => {
    let validate;
    try {
        validate = await transcationValidation.validateAsync(req.body);
    } catch (e) {
        console.error(e);
        return res.status(400).send({ message: e.details[0].message });
    }
    if (validate.error)
        return res.status(400).send({ message: validate.details[0].message });
    try {
        const transcation = new transcationSchema(req.body);
        await transcation.save();
        // res.send(transcation._id);
        const user = await userSchema.findById(req.body.reciver_id);
        let amount = 0;
        if (req.body.is_credit) {
            amount = parseInt(user.amount) + parseInt(req.body.amount.value);
        } else {
            amount = parseInt(user.amount) - parseInt(req.body.amount.value);
        }
        await userSchema.findByIdAndUpdate(
            user._id,
            {
                $set: {
                    amount,
                },
            },
            { useFindAndModify: false }
        );

        const update = await userSchema.findById(user._id);
        res.status(200).send({ amount: update.amount });
    } catch (error) {
        console.log(error);
        res.status(400).send("Transcation Error");
    }
});

router.post("/getUserTranscations", async (req, res) => {
    console.log("in");
    let transcation = await transcationSchema.find({ reciver_id: req.body.id });
    res.send(transcation);
});

router.post("/searchAccountNumber", async (req, res) => {
    console.log("in");
    let user = await userSchema
        .findOne({
            account_number: req.body.account_number,
        })
        .select([
            "first_name",
            "last_name",
            "account_type",
            "email",
            "wallet_id",
        ]);
    if (user) res.send(user);
    else res.status(404).send("User Not Found");
});

router.post("/transferFund", async (req, res) => {
    let validate;
    try {
        validate = await transcationValidation.validateAsync(req.body);
    } catch (e) {
        console.error(e);
        return res.status(400).send({ message: e.details[0].message });
    }
    if (validate.error)
        return res.status(400).send({ message: validate.details[0].message });
    try {
        const sender = await userSchema.findById(req.body.sender_id);
        const reciver = await userSchema.findById(req.body.reciver_id);

        const sender_amount =
            parseInt(sender.amount) - parseInt(req.body.amount.value);
        const reciver_amount =
            parseInt(reciver.amount) + parseInt(req.body.amount.value);
        await userSchema.findByIdAndUpdate(
            sender._id,
            {
                $set: {
                    amount: sender_amount,
                },
            },
            { useFindAndModify: false }
        );
        await userSchema.findByIdAndUpdate(
            reciver._id,
            {
                $set: {
                    amount: reciver_amount,
                },
            },
            { useFindAndModify: false }
        );

        let senderTranscation = new transcationSchema({
            reciver_id: req.body.reciver_id,
            sender_id:
                sender.first_name +
                " " +
                sender.last_name +
                " / " +
                sender.account_number,
            wallet_id: sender.wallet_id,
            description: req.body.description,
            method: "Manual",
            is_credit: true,
            amount: { value: req.body.amount.value, currency: "INR" },
        });
        await senderTranscation.save();
        let reciverTranscation = new transcationSchema({
            sender_id:
                reciver.first_name +
                " " +
                reciver.last_name +
                " / " +
                reciver.account_number,
            reciver_id: req.body.sender_id,
            wallet_id: reciver.wallet_id,
            description: req.body.description,
            method: "Manual",
            is_credit: false,
            amount: { value: req.body.amount.value, currency: "INR" },
        });
        await reciverTranscation.save();
        res.send("success");
    } catch (error) {
        console.log(error);
        res.status(400).send("Transcation Error");
    }
});

module.exports = router;
