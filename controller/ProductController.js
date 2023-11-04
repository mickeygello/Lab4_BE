import { productRepository } from "../repository/index.js";

async function getAllProduct(req, res) {
    try {
        const products = await productRepository.getAllProduct();
        res.status(200).json({
            message: "get all products successfully",
            data: products
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

async function getProductById(req, res) {
    try {
        const product = await productRepository.getProductById(req.params.id);
        res.status(200).json({
            message: 'Get product by id successfully.',
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

async function createProduct(req, res) {
    try {
        const product = await productRepository.createProduct(req.body);
        res.status(200).json({
            message: "create product successfully",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

async function deleteProductById(req, res) {
    try {
        await productRepository.deleteProductById(req.params.id);
        res.status(200).json({
            message: "delete product successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}


async function addComment(req, res) {
    try {
        const { id } = req.params;
        const { user, text } = req.body;
        const comment = await productRepository.addComment(id, user, text, Date.now());
        if (!comment) {
            res.status(500).json({
                message: "add comment failed"
            })
        }
        else {
            res.status(200).send({
                message: "add comment successfully",
                data: comment
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

async function getAllComments(req, res) {
    try {
        const comments = await productRepository.getAllComments(req.params.id);
        res.status(200).json({
            message: 'Get all comment successfully.',
            data: comments
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

export default {
    getAllProduct,
    getProductById,
    createProduct,
    deleteProductById,
    getAllComments,
    addComment
}