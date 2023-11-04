import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import {categoryRouter, productRouter} from './routes/index.js';
import connectDB from './database/database.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/products', productRouter)
app.use('/categories', categoryRouter)

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});