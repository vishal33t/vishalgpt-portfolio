const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");

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

const addSkill = async (req, res) => {
  try {
    const db = getDB();

    await db.collection("skills").insertOne(req.body);

    res.status(201).json({
      success: true,
      message: "Skill Added",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to add skill",
    });
  }
};

const updateSkill = async (req, res) => {
  try {
    const db = getDB();

    await db.collection("skills").updateOne(
      {
        _id: new ObjectId(req.params.id),
      },
      {
        $set: req.body,
      }
    );

    res.status(200).json({
      success: true,
      message: "Skill Updated",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update skill",
    });
  }
};

const deleteSkill = async (req, res) => {
  try {
    const db = getDB();

    await db.collection("skills").deleteOne({
      _id: new ObjectId(req.params.id),
    });

    res.status(200).json({
      success: true,
      message: "Skill Deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete skill",
    });
  }
};

module.exports = {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
};