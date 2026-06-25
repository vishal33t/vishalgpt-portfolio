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

const updateProfile = async (req, res) => {
  try {
    const db = getDB();

    const {
      name,
      title,
      bio,
      about,
      college,
      degree,
      graduationyear,
    } = req.body;

    await db.collection("profile").updateOne(
      {},
      {
        $set: {
          name,
          title,
          bio,
          about,
          college,
          degree,
          graduationyear,
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};