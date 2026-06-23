const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    shortDescription: {
      type: String,
      required: true,
      maxlength: 150,
    },

    description: {
      type: String,
      required: true,
    },

    categoryId: {
      type: String,
      ref: "Category",
      required: true,
    },

    techStack: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one technology is required",
      },
    },

    features: {
      type: [String],
      default: [],
    },

    imageUrl: {
      type: String,
      default: "",
    },

    github: {
      type: String,
      default: "",
    },

    liveDemo: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      default: "Full Stack Developer",
    },

    status: {
      type: String,
      enum: ["completed", "in-progress"],
      default: "completed",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);