import Joi from '@hapi/joi';

export default {
  createProduct: Joi.object().keys({
    name:Joi.string().required(),
    description:Joi.string().required(),
    price:Joi.number().required(),
    variants:Joi.array().items(Joi.object().keys({
      name:Joi.string().required(),
      description:Joi.string().required(),
      sku:Joi.number().required(),
      additionalCost:Joi.number().required(),
      stockCount:Joi.number().required(),
    })).required()
  }),

  updateProduct: Joi.object().keys({
    id:Joi.string().required(),
    name:Joi.string(),
    description:Joi.string(),
    price:Joi.number()
  }),

  deleteProduct: Joi.object().keys({
    id:Joi.string().required()
  }),

  getProduct: Joi.object().keys({
    id:Joi.string().required()
  }),

  searchProduct: Joi.object().keys({
    key:Joi.string().required(),
    page:Joi.number().required(),
    limit:Joi.number().required(),
  }),
};
