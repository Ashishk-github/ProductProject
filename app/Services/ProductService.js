import ProductRepository from "../DatabaseOperation/ProductRepository";
import ProductVariantRepository from "../DatabaseOperation/ProductVariantRepository";
const fs = require("fs");

export default class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
    this.productVariantRepository = new ProductVariantRepository();
  }

  /**
   * create new product
   * @param args object
   * @returns message
   */
  async createProduct(args) {
    try {
      const { name, description, price, variants } = args;
      const product = await this.productRepository.create({
        name,
        description,
        price,
      });
      variants.forEach((variant) => {
        variant.productId = product.id;
      });
      await this.productVariantRepository.insertMany(variants);
      return {
        message: "Product Created Successfully",
        productId: product.id,
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * update new product
   * @param args object
   * @returns message
   */
  async updateProduct(args) {
    try {
      const { id, name, description, price } = args;
      const updateObj = {};

      if (name) updateObj["name"] = name;
      if (description) updateObj["description"] = description;
      if (price) updateObj["price"] = price;

      const product = await this.productRepository.updateOne(
        { _id: id },
        { $set: updateObj }
      );
      return {
        message: "Product Updated Successfully",
        productId: product.id,
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * update new product
   * @param args object
   * @returns message
   */
  async deleteProduct(args) {
    try {
      const { id } = args;
      const productPromise = this.productRepository.delete({ _id: id });
      const productVariantPromise = this.productVariantRepository.deleteMany({
        productId: id,
      });
      await Promise.all([productPromise, productVariantPromise]);
      return {
        message: "Product Deleted Successfully",
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * update new product
   * @param args object
   * @returns message
   */
  async getProduct(args) {
    try {
      const { id } = args;
      const productPromise = this.productRepository.findOne({ _id: id });
      const productVariantPromise = this.productVariantRepository.find({
        productId: id,
      });
      const [product, productVariants] = await Promise.all([
        productPromise,
        productVariantPromise,
      ]);
      product.variants = productVariants;
      return product;
    } catch (error) {
      throw error;
    }
  }

  /**
   * update new product
   * @param args object
   * @returns message
   */
  async searchProduct(args) {
    try {
      const { key, page, limit } = args;
      let product = await this.productRepository
        .aggregate([{$match:{
          $or: [{ name: new RegExp(key) }, { description: new RegExp(key) }],
        }},{
          $lookup:{
            from: "ProductVariants",
            localField: "_id",
            foreignField: "productId",
            as: "variants"
          }
        }])
        .skip((page - 1) * limit)
        .limit(limit);
      if (!product?.length) {
        const variant = await this.productVariantRepository.find({
          $or: [{ name: new RegExp(key) }],
        });
      }
      return product;
    } catch (error) {
      throw error;
    }
  }
}
