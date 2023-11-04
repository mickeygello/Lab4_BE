import express from 'express';
import { categoryController } from '../controller/index.js';

const categryRouter = express.Router()

categryRouter.get('/', categoryController.getAllCategory)
categryRouter.post('/', categoryController.createCategory)

export default categryRouter