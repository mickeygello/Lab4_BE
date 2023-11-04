import { categoryRepository } from "../repository/index.js";

async function getAllCategory(req, res) {
    try {
        const categories = await categoryRepository.getAllCategory();
        res.status(200).json({
            message: "Get all categories successfully",
            data: categories
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

async function createCategory(req, res) {
    try {
        const { name, description } = req.body;
        const category = await categoryRepository.createCategory({ name, description });
        if (!category) {
            res.status(500).json({
                message: "create product false"
            })
        }
        else {
            res.status(200).json({
                message: "Create product successfully",
                data: category
            })
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

export default {
    getAllCategory,
    createCategory
}