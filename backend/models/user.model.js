import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,   
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    gender:{
        type: String,
        enum:["male", "female"]
    },
    profilePic:{
        type: String,
        default: "",
    },
    // createdAt and updatedAt: mostly used for Members since: <createdAt>
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;