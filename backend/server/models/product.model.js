const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be at least 3 characters"]
    },
    price: {
        type: Number,
        minLength: [1, "Title must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [3, "Description must be at least 3 characters"]
    },
}, {timestamps:true})

const Job = mongoose.model("product",ProductSchema);

module.exports = Job;