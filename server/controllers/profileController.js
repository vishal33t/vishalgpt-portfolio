const { getDB } = require("../config/db");

const getProfile = async (req, res) => {
  try {
    const db = getDB();

    const profile = await db.collection("profile").findOne({});

    res.status(200).json(profile);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
    });
  }
};

module.exports = {
  getProfile,
};