const express = require('express');
const { getProfile, updateUser } = require('../controllers/userController');

const router = express.Router();

// Define user-related routes
router.get('/profile', getProfile);
router.put('/:id', updateUser);

module.exports = router;  // Ensure the router is exported
