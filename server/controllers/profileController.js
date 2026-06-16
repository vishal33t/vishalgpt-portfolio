const { getDB } = require("../config/db");

const getProfile = async (req, res) => {
  try {
    const db = getDB();

    const profile = await db
      .collection("profile")
      .findOne({});

    res.json(profile);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getProfile,
};