import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true,"Email id already taken"]
    },
    password: {
        type: String,
        required: true
    },
  },
    {
        timestamps: true,
    },
);

const userModel = mongoose.model("User", userSchema);

export { userSchema ,userModel };