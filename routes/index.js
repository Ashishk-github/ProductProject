import ProductApi from './ProductApi'
import express from 'express';
const router = express.Router();

router.use('/product',ProductApi)

export default router