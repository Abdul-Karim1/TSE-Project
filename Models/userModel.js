const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
    },
    { timestamps: true }
);

mongoose.model("UserInfo", UserDetailsScehma);