const mongoose = require("mongoose");

const userRoleSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength:3,
    required: true,
    unique:true,
  },
},
{ timestamps: true }
);

module.exports = mongoose.model("userRole", userRoleSchema);