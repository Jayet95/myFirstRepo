const { Schema, model } = require("mongoose");

const MINIMUM_PRICE = 0.1;

const ProductSchema = new Schema({
    productName: {
      type: String,
      required: [true, "Please provide an product name"],
      unique: [true, "Username is already exist"],
    },
    price: {      type: Number,
        min: [MINIMUM_PRICE, `Minimum price must be at least ${MINIMUM_PRICE}`]
      
      },
    type: { type: String },
    brand: {type:String},
picture:{type:String},
  //  users: [{ type:Schema.Types.ObjectId,ref:'User'}],
    createAt: { type: Date, default: Date.now, immutable: true },
  });


  module.exports = model("Product", ProductSchema);