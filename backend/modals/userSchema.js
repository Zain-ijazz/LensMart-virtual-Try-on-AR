const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    resetToken: {
        type: String,
        default: null, // Default value is null
    },
    resetTokenExpiry: {
        type: Date,
        default: null, // Default value is null
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
