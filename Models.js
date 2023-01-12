const mongoose = require("mongoose");
const { PhonesSchema } = require("./Schemas");

const PhonesModel = mongoose.model("Phone", PhonesSchema);

module.exports = {
    PhonesModel,
}