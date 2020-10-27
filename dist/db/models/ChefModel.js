"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
const mongoose = require('mongoose');
exports.Chef = mongoose.Schema({
    img: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    details: {
        type: String,
        require: true
    },
    restaurants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'RestaurantModel',
            require: true
        }]
});
module.exports = mongoose.model('ChefModel', exports.Chef);
//# sourceMappingURL=ChefModel.js.map