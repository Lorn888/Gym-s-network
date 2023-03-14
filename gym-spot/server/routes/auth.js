const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST /auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.authenticate(email, password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = user.generateAuthToken();
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /auth/signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    const token = user.generateAuthToken();
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
