const { getDB } = require("../config/db");

const getProjects = async (req, res) => {
  try {
    const db = getDB();

    const projects = await db
      .collection("projects")
      .find({})
      .toArray();

    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getProjects,
};