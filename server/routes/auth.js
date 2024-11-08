// routes/auth.js
import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import validateUser from '../middlewares/validators.js';

const router = express.Router();

// @route   POST /api/register
// @desc    Register a new user
// @access  Public
router.post('/register', validateUser, async (req, res) => {
  const { name, email, password, mobileNumber } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      name,
      email,
      password: hashedPassword,
      mobileNumber
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
