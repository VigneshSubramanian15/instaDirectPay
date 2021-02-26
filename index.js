const express = require("express");
var cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const fileUpload = require("express-fileupload");
//Routes Import
const uploadDoc = require("./Routes/DocsUpload");
const admin = require("./Routes/Admin");
const reg_login = require("./Routes/RegisterLogin");
const transcation = require("./Routes/transcations");
//MongoDB Connection
mongoose.connect(
    process.env.DB_CONNECTION_SERVER,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected To DataBase");
    }
);
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

//Enable Cors Support
app.use(cors());

app.use(fileUpload());

// Middleware To Parse Body
app.use(express.json());
app.use(express.static(__dirname + "/docs"));

//Routes Implementation
app.use("/docs", uploadDoc);
app.use("/admin", admin);
app.use("/", reg_login);
app.use("/", transcation);
app.get("/", (req, res) => res.send("welcome"));

app.listen(process.env.PORT || 3000, () => {
    console.log("NodeServer Started ");
});
