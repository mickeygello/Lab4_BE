import mongoose, { Schema } from "mongoose";

const Comment = mongoose.model("Comment", new Schema({
    user:{
        type: String,
    },
    text:{
        type: String,
    },
    createdAt:{
        type: String
    }

}))

export default Comment