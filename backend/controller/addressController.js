// controllers/addressController.js
const Address = require("../model/Address");

exports.getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAddressById = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ error: "Address not found" });
    }
    res.json(address);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createAddress = async (req, res) => {
  const { streetName, city, state, zipCode } = req.body;

  try {
    const newAddress = new Address({ streetName, city, state, zipCode });
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateAddress = async (req, res) => {
  const { streetName, city, state, zipCode } = req.body;
  try {
    const address = await Address.findByIdAndUpdate(
      req.params.id,
      { streetName, city, state, zipCode },
      { new: true }
    );
    if (!address) {
      return res.status(404).json({ error: "Address not found" });
    }
    res.json(address);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) {
      return res.status(404).json({ error: "Address not found" });
    }
    res.json({ message: "Address deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
