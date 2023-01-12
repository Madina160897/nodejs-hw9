const { Schema } = require("mongoose");

const PhonesSchema = new Schema({
    module: String,
    price: Number,
    color: String,
})

module.exports = {
    PhonesSchema,
}