import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      // changed to camelCase for convention
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ["Student", "Admin"], // correct way to restrict values
      required: true,
      default: "Student",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
