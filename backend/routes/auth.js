import { Router } from 'express';
const router = Router();
import User from '../models/Users.js';

// Sample route to create a user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password }); // Remember to hash password in real apps
    await newUser.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' }); 
  }
});

export default router;