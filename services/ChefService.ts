const mongoose = require('mongoose');
const ChefModel = require('../db/models/ChefModel')

export class ChefService {
    constructor(){
        mongoose.connect('mongodb://127.0.0.1:27017/epicure', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    }

    public async getChef(id: string) {
        let chef = await ChefModel.findById(id).populate('restaurants')
        return chef
    }
}