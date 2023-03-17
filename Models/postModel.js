const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    id: { type: Number, required: true, unique: true, },
    title: String,
    imageURL: String,
    price: Number,
});

module.exports = mongoose.model("products", ProductSchema);