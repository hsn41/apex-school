const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  {
    name: { type: String },
    mobile: { type: String },
    email: { type: String }
  },
  "user"
);
module.exports = { User };
