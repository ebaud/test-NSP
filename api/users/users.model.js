const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersModel = new Schema({
    name: {
        type: String,
        required: [true, "Please provide an name"],
    },
    surname: {
        type: String,
        required: [true, "Please provide an surname"],
    },
    email: {
        type: String,
        unique: [true, "This email already exist"],
        required: [true, "Please provide an email"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    }
});

module.exports = mongoose.model("Users", usersModel);