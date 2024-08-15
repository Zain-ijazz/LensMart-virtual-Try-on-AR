const express = require('express');
const router = express.Router();
const User = require('../modals/userSchema.js');
const jwt = require('jsonwebtoken');

const RESET_TOKEN_SECRET = "YourSecretKey";

router.post('/', async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = jwt.sign({ email }, RESET_TOKEN_SECRET, { expiresIn: '1h' });
    user.resetToken = resetToken;
    await user.save();

    res.status(200).json({ message: "Password reset process started", resetToken });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
