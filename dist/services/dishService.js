"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishService = void 0;
const mongoose = require('mongoose');
const DishModel = require('../db/models/DishModel');
class DishService {
    constructor() {
        mongoose.connect('mongodb://127.0.0.1:27017/epicure', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    }
    async getHomepageDishes() {
        let dishes = [];
        dishes.push(await DishModel.findById("5f915309da122e9953314661"));
        dishes.push(await DishModel.findById("5f915309da122e9953314662"));
        dishes.push(await DishModel.findById("5f915309da122e9953314663"));
        return dishes;
    }
    async postNewDish(dishDetails) {
        let dish = await DishModel(dishDetails).save();
        return dish._id;
    }
}
exports.DishService = DishService;
//# sourceMappingURL=DishService.js.map