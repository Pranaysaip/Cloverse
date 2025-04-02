import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import userRoutes from "./src/routes/userRoutes.js"; // ✅ Corrected path

dotenv.config(); // Load env variables first

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Auth0 Middleware for JWT Verification
const checkJwt = expressjwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    }),
    audience: process.env.AUTH0_AUDIENCE,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ["RS256"],
});

// ✅ MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Routes with Auth0 Protection
app.use("/api/users", checkJwt, userRoutes); // Protect user routes with Auth0

// ✅ Root Route
app.get("/", (req, res) => res.send("🚀 Cloverse Backend Running with Auth0"));

export default app;
