const { Schema } = require("mongoose");

const PhoneShema = new Schema({
    model: String,
    price: Number,
    color: String,
});

module.exports = {
    PhoneShema,
}