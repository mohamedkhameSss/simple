const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: "string",
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: "string",
    required: [true, "Username already exists"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "userNAME INVALid , it shouid contain 8-20 alphanumeric LEtters and unique",
    ],
  },
  image: {
    type: "string",
  },
});
const User = models.User || model("User", UserSchema);
export default User;
