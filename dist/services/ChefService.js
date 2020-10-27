"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefService = void 0;
const mongoose = require('mongoose');
const ChefModel = require('../db/models/ChefModel');
class ChefService {
    constructor() {
        mongoose.connect('mongodb://127.0.0.1:27017/epicure', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    }
    async getChef(id) {
        let chef = await ChefModel.findById(id).populate('restaurants');
        return chef;
    }
}
exports.ChefService = ChefService;
//# sourceMappingURL=ChefService.js.map