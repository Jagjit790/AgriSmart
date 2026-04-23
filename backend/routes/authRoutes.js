const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

require("dotenv").config(); // ✅ load env

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET; // ✅ from .env

// ======================
// SIGNUP
// ======================
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.json({ message: "Signup successful" });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// ======================
// LOGIN
// ======================
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            JWT_SECRET, // ✅ using env
            { expiresIn: "1d" }
        );

        res.json({ token, message: "Login successful" });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;