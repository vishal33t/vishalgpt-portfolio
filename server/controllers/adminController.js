const jwt = require("jsonwebtoken");
const { getDB } = require("../config/db");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const db = getDB();

    const admin = await db.collection("admins").findOne({
      username,
      password,
    });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

   const token = jwt.sign(
  {
    username: admin.username,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  }
);

res.json({
  message: "Login successful",
  token,
});

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  login,
};