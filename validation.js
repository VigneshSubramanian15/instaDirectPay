const validate = require("joi");

//registartion
const registartion = validate.object({
    account_type: validate.string().required(),
    first_name: validate.string().min(3).required(),
    last_name: validate.string().min(3).required(),
    phone_number: validate.number().min(3).required(),
    address: validate.string().min(3).required(),
    email: validate.string().email().min(3).required(),
    password: validate.string().min(3).required(),
});

//registartion
const loginValidation = validate.object({
    email: validate.string().required(),
    password: validate.string().min(3).required(),
});

//Transcation
const transcationValidation = validate.object({
    reciver_id: validate.string().min(3).required(),
    sender_id: validate.string().min(3).required(),
    wallet_id: validate.number().min(3).required(),
    method: validate.string().min(3).required(),
    description: validate.string().min(3).required(),
    amount: validate.object().required(),
    date: validate.string(),
    is_credit: validate.boolean().required(),
});

module.exports = {
    registrationValidation: registartion,
    loginValidation,
    transcationValidation,
};
