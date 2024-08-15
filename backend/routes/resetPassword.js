const express = require('express');
const router = express.Router();
const User = require('../modals/userSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const RESET_TOKEN_SECRET = "YourSecretKey";

router.post('/', async (req, res, next) => {
  const { token, newPassword } = req.body;

  try {
    const decodedToken = jwt.verify(token, RESET_TOKEN_SECRET);
    const user = await User.findOne({ email: decodedToken.email });
    if (!user) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = null; // Clear reset token
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
