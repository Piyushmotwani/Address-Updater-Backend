// routes/addressRoutes.js
const express = require("express");
const router = express.Router();
const addressController = require("../controller/addressController");

router.get("/addresses", addressController.getAddresses);
router.get("/addresses/:id", addressController.getAddressById);
router.post("/addresses", addressController.createAddress);
router.put("/addresses/:id", addressController.updateAddress);
router.delete("/addresses/:id", addressController.deleteAddress);

module.exports = router;
