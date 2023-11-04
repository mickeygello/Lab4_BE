import mongoose, { Schema } from "mongoose";

const Image = mongoose.model("Image", new Schema({
    url:{
        type: String,
    },
    caption:{
        type: String,
    },
    path:{
        type: String,
    },
    createdAt:{
        type: Number
    }
}));

export default Image;