// models/Address.js
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  streetName: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
