import Category from "../model/Category.js";

async function getAllCategory(){
    const categories = await Category.find()
    return categories;
}

async function createCategory({name, description}){
    const category = Category.create({name, description})
    return category
}

export default{
    getAllCategory,
    createCategory
}