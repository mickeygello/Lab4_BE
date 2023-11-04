import express from 'express';
import { productController } from '../controller/index.js';

const productRouter = express.Router()

productRouter.get('/', productController.getAllProduct);
productRouter.get('/:id', productController.getProductById);
productRouter.post('/', productController.createProduct);
productRouter.get('/:id/comments', productController.getAllComments);
productRouter.post('/:id/comment', productController.addComment);

export default productRouter;