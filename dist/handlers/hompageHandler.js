"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomepageHandler = void 0;
const ChefService_1 = require("../services/ChefService");
const DishService_1 = require("../services/DishService");
const RestaurantService_1 = require("../services/RestaurantService");
class HomepageHandler {
    constructor() {
        this.chefService = new ChefService_1.ChefService();
        this.dishService = new DishService_1.DishService();
        this.RestaurantService = new RestaurantService_1.RestaurantService();
    }
    async getHomepageData() {
        try {
            let data = {};
            data["restaurants"] = await this.RestaurantService.getHomepageRestaurantsPhotos();
            data["chefOfTheWeek"] = await this.chefService.getChef("5f8efadfa729142b1bef407a");
            data["dishes"] = await this.dishService.getHomepageDishes();
            return data;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.HomepageHandler = HomepageHandler;
//# sourceMappingURL=hompageHandler.js.map