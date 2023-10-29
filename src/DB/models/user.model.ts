import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    // phone: {
    //   type: String,
    //   required: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    // },
    // email: {
    //   type: String,
    //   required: true,
    // },
    // profilePicture: {
    //   type: String,
    //   default: "",
    // },
    // group: {
    //   type: String,
    //   default: "user",
    // },
    // slug: {
    //   type: String,
    //   lowercase: true,
    // },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
