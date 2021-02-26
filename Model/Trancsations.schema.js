const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    reciver_id: { type: String, required: true },
    sender_id: { type: String, required: true },
    wallet_id: {
        type: String,
        required: true,
        createIndexes: { unique: true },
    },
    description: String,
    date: { type: Date, default: Date.now, required: true },
    method: { type: String, required: true },
    is_credit: { type: Boolean, required: true },
    amount: {
        value: { type: Number, required: true },
        currency: { type: String, required: true },
    },
    desctiption: String,
});
module.exports = mongoose.model("transaction", transactionSchema);
