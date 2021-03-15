const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    edition: {
      type: String,
      trim: true,
    },
    publisher: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    // stock: {
    //   type: Number,
    // },
    // sold: {
    //   type: Number,
    //   default: 0,
    // },
    // photo: {
    //   data: Buffer,
    //   contentType: String,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
