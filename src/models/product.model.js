const mongoose = require('../database/mongo.db');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String, 
        require: true
    },
    brand: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Product', ProductSchema);
