const mongoose = require('mongoose');
const DishModel = require('../db/models/DishModel')

export class DishService {
    constructor(){
        mongoose.connect('mongodb://127.0.0.1:27017/epicure', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    }

    public async getHomepageDishes() {
        let dishes = [];
        dishes.push(await DishModel.findById("5f915309da122e9953314661"))
        dishes.push(await DishModel.findById("5f915309da122e9953314662"))
        dishes.push(await DishModel.findById("5f915309da122e9953314663"))
        return dishes
    }

    public async postNewDish(dishDetails) {
        let dish = await DishModel(dishDetails).save();
        return dish._id
    }
}