import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    auth0Id: { type: String, unique: true, required: true }, // Store Auth0 user ID
    name: String,
    email: { type: String, unique: true, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;

