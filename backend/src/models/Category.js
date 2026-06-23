const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    icon: {
        type: String
    },
    projectsCount: {
        type: Number,
        default: 0
    },
    tools: {
        type: [String]
    }
});

module.exports = mongoose.model("Category", categorySchema);