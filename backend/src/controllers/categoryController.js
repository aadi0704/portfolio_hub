const Category = require("../models/Category")

const getCategories = async (req,res)=>{
    try {
        const data = await Category.find();
        res.status(200).json(data);
    }
    catch(e) {
        res.status(500).json({message:e.message});
    }
}

module.exports = {getCategories}