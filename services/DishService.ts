const mongoose = require('mongoose');
const Dish = require('../db/models/DishModel')

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
        dishes.push(await Dish.findById("5f915309da122e9953314661"))
        dishes.push(await Dish.findById("5f915309da122e9953314662"))
        dishes.push(await Dish.findById("5f915309da122e9953314663"))
        return dishes
    }

    public async postNewDish(dishDetails) {
        let dish = await Dish(dishDetails).save();
        return dish._id
    }

    public async getAllDishes() {
        let dishes = await Dish.find({});
        return dishes;
    }

    public async deleteDish(id) {
        let deletedDish = await Dish.deletOne({_id: id});
        return deletedDish;
    }

    public async updateDish(dish) {
        let updatedDish = await Dish.findById(dish.id);
        if(dish.name) {
            updatedDish.name = dish.name
        }
        if( dish.ingredients ) {
            updatedDish.ingredients = dish.ingredients
        }

        if(dish.price) {
            updatedDish.price = dish.price
        }
        await updatedDish.save();
        return updatedDish;
    }
}