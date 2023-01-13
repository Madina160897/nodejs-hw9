const mongoose = require("mongoose");
const { PhoneShema } = require("./Schemas");

const PhoneModel = mongoose.model("Phone", PhoneShema);

module.exports = {
    PhoneModel,
}

