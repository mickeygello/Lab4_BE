import mongoose, { Schema } from "mongoose";

const Product = mongoose.model("Product", new Schema({
    name:{
        type: String,
    },
    price:{
        type: String,
    },
    images:[
        {
            url: String,
            caption: String,
            path: String
        },
    ],
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
    },
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Comment",
        },
    ]
}));

export default Product;