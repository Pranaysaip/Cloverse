import app from "./app.js";
import dotenv from "dotenv";

dotenv.config(); // Load env variables

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
