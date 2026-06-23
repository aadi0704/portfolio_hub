const DSA = require("../models/dsaModel");
const fallbackData = require("../data/dsaData");


const getDSAData = async (req, res) => {
  try {
    const data = await DSA.findOne({ username: "aadi_0407" });

    
    if (data) {
      return res.json({
        success: true,
        source: "database",
        data
      });
    }

    
    return res.json({
      success: true,
      source: "fallback",
      data: fallbackData
    });

  } catch (err) {
    
    return res.json({
      success: true,
      source: "fallback-error",
      data: fallbackData
    });
  }
};

module.exports = {getDSAData}