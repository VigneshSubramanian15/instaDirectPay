const router = require("express").Router();
const transcationSchema = require("../Model/Trancsations.schema");
const userSchema = require("../Model/User.schema");

router.get("/card", async (req, res) => {
    const userCount = await userSchema.find().countDocuments();
    const activeUsers = await userSchema
        .find({ isSuspended: false })
        .countDocuments();
    const suspendedUsers = await userSchema
        .find({ isSuspended: true })
        .countDocuments();

    res.json({ userCount, activeUsers, suspendedUsers });
});

router.get("/getusers", async (req, res) => {
    const user = await userSchema.find().limit(100);
    res.json({ user });
});
router.post("/getuser", async (req, res) => {
    const user = await userSchema.findById(req.body.id).limit(100);
    res.json({ user });
});

module.exports = router;
