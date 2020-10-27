"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantController = void 0;
const RestaurantHandler_1 = require("../handlers/RestaurantHandler");
class RestaurantController {
    constructor() {
        this.restaurantHandler = new RestaurantHandler_1.RestaurantHandler();
        this.getRestaurantsData = this.getRestaurantsData.bind(this);
        this.getNewRestauratns = this.getNewRestauratns.bind(this);
        this.getOpenNowRestaurants = this.getOpenNowRestaurants.bind(this);
        this.getPopularRestaurants = this.getPopularRestaurants.bind(this);
        this.postNewRestaurant = this.postNewRestaurant.bind(this);
        this.getRestaurantPageData = this.getRestaurantPageData.bind(this);
    }
    async getRestaurantsData(req, res) {
        let data = await this.restaurantHandler.getRestaurantsData();
        res.send(data);
    }
    async getNewRestauratns(req, res) {
        let restaurants = await this.restaurantHandler.getNewRestaurants();
        res.send(restaurants);
    }
    async getOpenNowRestaurants(req, res) {
        let restaurants = await this.restaurantHandler.getOpenNowRestaurants();
        res.send(restaurants);
    }
    async getRestaurantPageData(req, res) {
        let restaurant = await this.restaurantHandler.getRestaurantPageData(req.params.name);
        res.send(restaurant);
    }
    async getPopularRestaurants(req, res) {
        let restaurants = await this.restaurantHandler.getPopularRestaurants();
        res.send(restaurants);
    }
    async postNewRestaurant(req, res) {
        let restaurant = await this.restaurantHandler.postNewRestaurant(req.body);
        res.send(restaurant);
    }
}
exports.RestaurantController = RestaurantController;
//# sourceMappingURL=RestaurantController.js.map