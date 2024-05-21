const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    googleid: String,
  },
  {
    collection: "UserBase",
  }
);

mongoose.model("UserBase", UserSchema);
