const mongoose = require('mongoose')

export const Chef = mongoose.Schema({
    img: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    details:{
        type: String,
        require: true
    },
    restaurants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RestaurantModel',
        require: true
    }]
})

module.exports = mongoose.model('ChefModel', Chef);