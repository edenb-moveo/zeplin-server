import { RestaurantModel } from "../db/models/RestaurantModel";

const Restaurant = require('../db/models/RestaurantModel')
const mongoose = require('mongoose');

export class RestaurantService {
    dateOfNewRestaurants = "2019-01-01"
    constructor(){
        mongoose.connect('mongodb://127.0.0.1:27017/epicure', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    }

    public async getHomepageRestaurantsPhotos() {
        let restaurants = [];
        restaurants.push(await Restaurant.findById("5f912bd44da2288ab30ad990"))
        restaurants.push(await Restaurant.findById("5f912c314da2288ab30ad991"))
        restaurants.push(await Restaurant.findById("5f912c734da2288ab30ad992"))
        return restaurants;
    }

    public async getNewRestaurants() {
        let unixDateOfNewRestaurants = parseInt((new Date(this.dateOfNewRestaurants).getTime() / 1000).toFixed(0))
        let restaurants = await Restaurant.find({ dateOpened: {$gte: unixDateOfNewRestaurants} })
        return restaurants
    }

    public async getOpenNowRestaurants() {
        let currentHour = new Date().getHours()
        let restaurants = await Restaurant.find({
            startTime: {
                $lt: currentHour
            },
            closeTime: {
                $gte: currentHour
            }
        })
        return restaurants
    }

    public async getPopularRestaurants() {
        let restaurants = await Restaurant.find({
            popularity: "*****"
        })
        return restaurants
    }

    public async getRestaurantsData() {
        let restaurantsPhotos = await Restaurant.find({})
        restaurantsPhotos = restaurantsPhotos.slice(6,15)
        return restaurantsPhotos;
    }

    public async postNewRestaurant(restaurant, breakFastDishes, lunchDishes) {

        let restaurantSchema = this.buildRestaurantSchema(restaurant, breakFastDishes,lunchDishes);
        let newRestaurant = await Restaurant(restaurantSchema).save();
        return newRestaurant
    }

    public async getRestaurantPageData(id: string) {
        let data = await Restaurant.findById(id).populate('breakFastDishes').populate('lunchDishes')
        return data;
    }

    public async updateRestaurant(restaurant) {
        let restaurantToUpdate = await Restaurant.findById(restaurant.id);
        if(restaurant.name) {
            restaurantToUpdate.name = restaurant.name
        }
        if(restaurant.chefName) {
            restaurantToUpdate.chefName = restaurant.chefName
        }
        if(restaurant.startTime) {
            restaurantToUpdate.startTime = restaurant.startTime
        }
        if(restaurant.popularity) {
            restaurantToUpdate.popularity = restaurant.popularity
        }
        if(restaurant.closeTime) {
            restaurantToUpdate.closeTime = restaurant.closeTime
        }
        await restaurantToUpdate.save()
        return restaurantToUpdate;
    }

    public async deleteRestaurant(id) {
        let restaurantToBeDeleted = await Restaurant.deleteOne({_id: id});
        return restaurantToBeDeleted;
    }

    private buildRestaurantSchema(restaurant, breakFastDishes, lunchDishes) {
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