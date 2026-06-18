const { getDB } = require("../config/db");

const getSkills = async (req, res) => {
  try {
    const db = getDB();

    const skills = await db
      .collection("skills")
      .find({})
      .toArray();

    res.status(200).json(skills);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch skills",
    });
  }
};

module.exports = {
  getSkills,
};