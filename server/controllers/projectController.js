const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");

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

const addProject = async (req, res) => {
  try {
    const db = getDB();

    await db.collection("projects").insertOne(req.body);

    res.status(201).json({
      success: true,
      message: "Project Added",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add project",
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const db = getDB();

    await db.collection("projects").updateOne(
      {
        _id: new ObjectId(req.params.id),
      },
      {
        $set: req.body,
      }
    );

    res.json({
      success: true,
      message: "Project Updated",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update project",
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const db = getDB();

    await db.collection("projects").deleteOne({
      _id: new ObjectId(req.params.id),
    });

    res.json({
      success: true,
      message: "Project Deleted",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete project",
    });
  }
};

module.exports = {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
};