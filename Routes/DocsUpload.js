const router = require("express").Router();
const userSchema = require("../Model/User.schema");

router.post("/img", async function (req, res) {
    let sampleFile;
    let uploadPath = [];

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }
    sampleFile = req.files.file;
    if(sampleFile.size < 2000001){let userId = JSON.parse(req.body.data).userId;
    user = await userSchema.findById(userId);
    console.log(user)
    let type = JSON.parse(req.body.data).type;
    let ext = sampleFile.name.split(".")[sampleFile.name.split(".").length - 1];
    let fileName = user._id + "-" + type + "." + ext;
    uploadPath = __dirname + "/../docs/" + fileName;

    // console.log(JSON.parse(req.body.data).type);
    await sampleFile.mv(uploadPath, async function (err) {
        if (err) return res.status(500).send(err);
        let document = user.documents;
        document = { ...document, [type]: fileName };
        await userSchema.findByIdAndUpdate(
            user._id,
            {
                $set: {
                    documents: document,
                },
            },
            { useFindAndModify: false }
        );
        res.send("File uploaded!");
    });}else{
        res.status(403).send("File Size Exceeded ")
    }
});

module.exports = router;
