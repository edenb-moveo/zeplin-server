"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantHandler = void 0;
const RestaurantService_1 = require("../services/RestaurantService");
class RestaurantHandler {
    constructor() {
        this.restraurantService = new RestaurantService_1.RestaurantService();
    }
    async getRestaurantsData() {
        try {
            let restaurants = await this.restraurantService.getRestaurantsData();
            return restaurants;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getNewRestaurants() {
        try {
            let restaurants = await this.restraurantService.getNewRestaurants();
            return restaurants;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getOpenNowRestaurants() {
        try {
            let restaurants = await this.restraurantService.getOpenNowRestaurants();
            return restaurants;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getPopularRestaurants() {
        try {
            let restaurants = await this.restraurantService.getPopularRestaurants();
            return restaurants;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async postNewRestaurant(restaurant) {
        try {
            let breakFastDishes = [];
            let lunchDishes = [];
            for (let i = 0; i < restaurant.breakFastDishes.length; i++) {
                let dish = await this.dishService.postNewDish(restaurant.breakFastDishes[i]);
                breakFastDishes.push(dish);
            }
            for (let i = 0; i < restaurant.lunchDishes.length; i++) {
                let dish = await this.dishService.postNewDish(restaurant.lunchDishes[i]);
                lunchDishes.push(dish);
            }
            let newRestaurnt = await this.restraurantService.postNewRestaurant(restaurant, breakFastDishes, lunchDishes);
            return newRestaurnt;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getRestaurantPageData(name) {
        try {
            let restaurant = await this.restraurantService.getRestaurantPageData(name);
            return restaurant;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.RestaurantHandler = RestaurantHandler;
//# sourceMappingURL=RestaurantHandler.js.map