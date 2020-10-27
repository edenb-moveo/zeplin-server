"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantModel = void 0;
const mongoose = require('mongoose');
exports.RestaurantModel = mongoose.Schema({
    img: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    chef: {
        type: String,
    },
    popularity: {
        type: String,
    },
    dateOpened: {
        type: Number,
    },
    startTime: {
        type: Number,
    },
    closeTime: {
        type: Number,
    },
    breakFastDishes: [{
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: 'DishModel'
        }],
    lunchDishes: [{
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: 'DishModel'
        }]
});
module.exports = mongoose.model('RestaurantModel', exports.RestaurantModel);
//# sourceMappingURL=RestaurantModel.js.map