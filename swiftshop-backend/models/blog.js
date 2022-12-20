const mongoose = require("mongoose"); 

var blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isLiked: {
      type: Boolean,
      deafult: false,
    },
    isDisliked: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    images:  {
      type: Array,
    },
    author: {
      type: String,
      default: "Admin",
    },
  },
  {
    // Include virtual properties when converting the model to a JSON object
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Blog", blogSchema);
