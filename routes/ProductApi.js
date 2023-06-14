import express from 'express';
import ProductController from '../app/Controllers/ProductController';
const ProductRouter = express.Router();


ProductRouter.post('/v1/create', (request, response) => {
  const productController = new ProductController(response);
  productController.createProduct(request);
});

ProductRouter.put('/v1/update', (request, response) => {
  const productController = new ProductController(response);
  productController.updateProduct(request);
});
ProductRouter.delete('/v1/delete', (request, response) => {
  const productController = new ProductController(response);
  productController.deleteProduct(request);
});
ProductRouter.get('/v1/get', (request, response) => {
  const productController = new ProductController(response);
  productController.getProduct(request);
});
ProductRouter.get('/v1/search', (request, response) => {
  const productController = new ProductController(response);
  productController.searchProduct(request);
});


export default ProductRouter;
