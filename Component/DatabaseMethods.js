const mongoose = require("mongoose");
require("./UserModel");
const usermd = mongoose.model("UserBase");

//usermd.create, deleteOne, find, findOne,
async function CreateUser(user) {
  try {
    await usermd.create({
      name: user["name"],
      email: user["email"],
      googleid: user["id"],
    });
  } catch (err) {
    console.log("Couldn't Create User");
    throw err;
  }
}

async function FindUser(user) {
  try {
    let userN = await usermd.findOne({ googleid: user["id"] });
    return userN;
  } catch (err) {
    throw err;
  }
}

async function FindID(id) {
  try {
    let user = await usermd.findById(id, { name: 1, id: 1 });
    return user;
  } catch (Err) {
    throw Err;
  }
}

module.exports = {
  CreateUser,
  FindUser,
  FindID,
};
