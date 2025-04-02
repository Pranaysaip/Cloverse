// import express from "express";
// import User from "../models/userModel.js"; // Ensure correct import path

// const router = express.Router();

// // router.get("/", async (req, res) => {
// //   const users = await User.find();
// //   res.json(users);
// // });

// // export default router;

import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

// ✅ Get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});

// ✅ Get logged-in user details
router.get("/me", async (req, res) => {
    try {
        const auth0UserId = req.auth.sub; // Extract Auth0 user ID from JWT
        const user = await User.findOne({ auth0Id: auth0UserId });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error });
    }
});

// ✅ Create or update a user
router.post("/", async (req, res) => {
    try {
        const auth0UserId = req.auth.sub;
        const { name, email } = req.body;

        let user = await User.findOne({ auth0Id: auth0UserId });

        if (!user) {
            user = new User({ auth0Id: auth0UserId, name, email });
        } else {
            user.name = name;
            user.email = email;
        }

        await user.save();
        res.status(201).json({ message: "User updated", user });
    } catch (error) {
        res.status(500).json({ message: "Error creating/updating user", error });
    }
});

// ✅ Delete user
router.delete("/", async (req, res) => {
    try {
        const auth0UserId = req.auth.sub;
        await User.findOneAndDelete({ auth0Id: auth0UserId });
        res.json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
});

export default router;

