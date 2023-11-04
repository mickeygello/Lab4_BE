import Product from "../model/Product.js";
import Comment from "../model/Comment.js";
import Image from "../model/Image.js";
import Category from "../model/Category.js";


async function getAllProduct() {
    const products = await Product.find().populate('category').populate('comments')
    return products
}

async function getProductById(id){
    const product = await Product.findById(id).exec()
    return product
}

async function deleteProductById(id){
    await Product.findByIdAndDelete(id)
}

async function createProduct({ name, price, images = [], category }) {
    try {
        return await Category.findOne({ name: category }).then(docCategory => {
            Product.create({ name, price, category: docCategory._id }).then(docProduct => {
                images.map(({ url, caption, path }) => {
                    Image.create({ url, caption, path, createdAt: Date.now() }).then(docImage => {
                        return Product.findByIdAndUpdate(docProduct._id, {
                            $push: {
                                images: {
                                    _id: docImage._id,
                                    url: url,
                                    caption: caption,
                                }
                            }
                        })
                    })
                })
            });
             // docCategory.forEach((e) =>{
            //     Product.create({ name, price, category: docCategory[0]._id }).then(docProduct => {
            //         images.map(({ url, caption, path }) => {
            //             Image.create({ url, caption, path, createdAt: Date.now() }).then(docImage => {
            //                 return Product.findByIdAndUpdate(docProduct._id, {
            //                     $push: {
            //                         images: {
            //                             _id: docImage._id,
            //                             url: url,
            //                             caption: caption,
            //                         }
            //                     }
            //                 })
            //             })
            //         })
            //     });
            // })
        })
    } catch (error) {
        throw new Error
    }
}

async function addComment(id, user, text, createAt){
    const comment = await Comment.create({user, text, createdAt: Date(Date.now())}).then(docComment =>{
        return Product.findByIdAndUpdate(id, {
            $push:{
                comments: docComment._id
            }
        })
    })
    return comment
}

async function getAllComments(id){
    const product = await Product.findById(id).populate('comments');
    return product.comments;
}

export default{
    getAllProduct,
    getProductById,
    createProduct,
    deleteProductById,
    addComment,
    getAllComments
}