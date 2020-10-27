"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantService = void 0;
const Restaurant = require('../db/models/RestaurantModel');
const mongoose = require('mongoose');
class RestaurantService {
    constructor() {
        this.dateOfNewRestaurants = "2019-01-01";
        mongoose.connect('mongodb://127.0.0.1:27017/epicure', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    }
    async getHomepageRestaurantsPhotos() {
        let restaurants = [];
        restaurants.push(await Restaurant.findById("5f912bd44da2288ab30ad990"));
        restaurants.push(await Restaurant.findById("5f912c314da2288ab30ad991"));
        restaurants.push(await Restaurant.findById("5f912c734da2288ab30ad992"));
        return restaurants;
    }
    async getNewRestaurants() {
        let unixDateOfNewRestaurants = parseInt((new Date(this.dateOfNewRestaurants).getTime() / 1000).toFixed(0));
        let restaurants = await Restaurant.find({ dateOpened: { $gte: unixDateOfNewRestaurants } });
        return restaurants;
    }
    async getOpenNowRestaurants() {
        let currentHour = new Date().getHours();
        let restaurants = await Restaurant.find({
            startTime: {
                $lt: currentHour
            },
            closeTime: {
                $gte: currentHour
            }
        });
        return restaurants;
    }
    async getPopularRestaurants() {
        let restaurants = await Restaurant.find({
            popularity: "*****"
        });
        return restaurants;
    }
    async getRestaurantsData() {
        let restaurantsPhotos = await Restaurant.find({});
        restaurantsPhotos = restaurantsPhotos.slice(6, 15);
        return restaurantsPhotos;
    }
    async postNewRestaurant(restaurant, breakFastDishes, lunchDishes) {
        let restaurantSchema = this.buildRestaurantSchema(restaurant, breakFastDishes, lunchDishes);
        let newRestaurant = await Restaurant(restaurantSchema).save();
        return newRestaurant;
    }
    async getRestaurantPageData(name) {
        let data = await Restaurant.findOne({ name: name }).populate('breakFastDishes').populate('lunchDishes');
        return data;
    }
    buildRestaurantSchema(restaurant, breakFastDishes, lunchDishes) {
        let schema = {
            img: restaurant.heroImg,
            name: restaurant.name,
            chefName: restaurant.chefName,
            startTime: restaurant.startTime,
            closeTime: restaurant.closeTime,
            breakFastDishes: breakFastDishes,
            lunchDishes: lunchDishes
        };
        return schema;
    }
}
exports.RestaurantService = RestaurantService;
//# sourceMappingURL=RestaurantService.js.map