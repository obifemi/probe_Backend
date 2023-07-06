const express = require('express');
const router = express.Router();
const Address = require('../models/Address');

// GET all addresses
// GET all addresses
router.get('/', async (req, res) => {
    try {
      const addresses = await Address.find();
      res.json(addresses);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving addresses' });
    }
  });
// GET single address
router.get('/:id', async (req, res) => {
    try {
      const address = await Address.findById(req.params.id);
      if (!address) {
        return res.status(404).json({ error: 'Address not found' });
      }
      res.status(200).json(address);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the address' });
    }
  });
  
  // PUT update address
  router.put('/:id', async (req, res) => {
    try {
      const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!address) {
        return res.status(404).json({ error: 'Address not found' });
      }
      res.status(200).json(address);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the address' });
    }
  });
  

router.post('/', async (req, res) => {
  try {
    const {
      name,
      address,
      bankDetails,
      postalCode,
      country,
      gender,
      recordType,
      swiftCode,
      newField1,
      newField2,
      email
      // Add more fields as needed
    } = req.body;

    const newAddress = new Address({
      name,
      address,
      bankDetails,
      postalCode,
      country,
      gender,
      recordType,
      swiftCode,
      newField1,
      newField2,
      email
      // Add more fields as needed
    });

    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
