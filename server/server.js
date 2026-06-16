const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./config/db");
const profileRoutes = require("./routes/profileRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/profile", profileRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "VishalGPT Backend Running 🚀",
  });
});

// Server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});