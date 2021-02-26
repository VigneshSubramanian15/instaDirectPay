const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    account_type: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    account_number: { type: Number, required: true, unique: true },
    wallet_id: { type: Number, required: true, unique: true },
    card_details: {
        number: {
            type: Number,
            unique: true,
            required: true,
        },
        expires: {
            type: Date,
            required: true,
        },
        cvv: {
            type: Number,
            required: true,
        },
        isenabled: {
            type: Boolean,
            default: false,
        },
    },
    join_date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    amount: { type: Number, required: true, default: 0 },
    documents: {
        profile_photo: String,
        id_proof: String,
        address_proof: String,
        signature_photo: String,
    },
    isSuspended: {
        type: Boolean,
        default: false,
        required: true,
    },
});
module.exports = mongoose.model("user", invoiceSchema);
