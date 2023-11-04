import mongoose, { Schema } from "mongoose";

const Category = mongoose.model("Category", new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String
    }
}));

export default Category;