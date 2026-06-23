const Project = require("../models/Project.js");

const getProjects = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const data = await Project.find({
      categoryId,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {getProjects}