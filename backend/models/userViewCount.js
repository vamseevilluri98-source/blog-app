const mongoose = require("mongoose");


const userViewCountSchema = new mongoose.Schema(
 {
   user_id: {
     type: String,
     required: true,
     trim: true,
   },
   count: {
     type: Number,
     default: 0,
   },
 },
 {
   timestamps: true,
 }
);


module.exports = mongoose.model("userViewCount", userViewCountSchema);
