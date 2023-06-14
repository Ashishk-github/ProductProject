const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name : {
      type: String,
    },
    sku: {
      type: Number,
    },
    additionalCost : {
      type: Number,
    },
    stockCount : {
      type: Number,
    },
    productId:{
      type:mongoose.Schema.Types.ObjectId
    }
  },

  {
    timestamps: true,
  }

);

/**
 * @typedef Accounts
 */
const variant = mongoose.model("ProductVariant", schema);

module.exports = variant;
