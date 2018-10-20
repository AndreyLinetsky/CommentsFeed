let mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comments', CommentSchema);
