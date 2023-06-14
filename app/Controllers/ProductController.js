import Controller from "./Controller";
import Validator from "../Validators/Validator";
import ProductService from "../Services/ProductService";

export default class ProductController extends Controller {
  constructor(response) {
    super(response);
    this.productService = new ProductService();
  }

  /**
   * register new product
   * @param {} request
   */
  async createProduct(request) {
    try {
      const params = await this.validateParams(
        request,
        Validator.createProduct
      );
      const productPromise = await this.productService.createProduct(
        params,
        request
      );
      this.sendResponse(productPromise);
    } catch (error) {
      this.handleException(error);
    }
  }

  async updateProduct(request) {
    try {
      const params = await this.validateParams(
        request,
        Validator.updateProduct
      );
      const productPromise = await this.productService.updateProduct(
        params,
        request
      );
      this.sendResponse(productPromise);
    } catch (error) {
      this.handleException(error);
    }
  }

  async deleteProduct(request) {
    try {
      const params = await this.validateParams(
        request,
        Validator.deleteProduct
      );
      const productPromise = await this.productService.deleteProduct(
        params,
        request
      );
      this.sendResponse(productPromise);
    } catch (error) {
      this.handleException(error);
    }
  }

  async getProduct(request) {
    try {
      const params = await this.validateParams(
        request,
        Validator.getProduct,
        true
      );
      const productPromise = await this.productService.getProduct(
        params,
        request,
      );
      this.sendResponse(productPromise);
    } catch (error) {
      this.handleException(error);
    }
  }

  async searchProduct(request) {
    try {
      const params = await this.validateParams(
        request,
        Validator.searchProduct,
        true
      );
      const productPromise = await this.productService.searchProduct(
        params,
        request,
      );
      this.sendResponse(productPromise);
    } catch (error) {
      this.handleException(error);
    }
  }
}
