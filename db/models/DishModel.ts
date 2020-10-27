const mongoose = require('mongoose');

const DishModel = mongoose.Schema({
    img: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    ingredients: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('DishModel', DishModel);