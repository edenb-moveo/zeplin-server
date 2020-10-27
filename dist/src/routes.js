"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express = require("express");
const HomepageController_1 = require("../controllers/HomepageController");
const RestaurantController_1 = require("../controllers/RestaurantController");
class Routes {
    constructor() {
        this.router = express.Router();
        this.hompageController = new HomepageController_1.HomepageController();
        this.restaurantController = new RestaurantController_1.RestaurantController();
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/homepage', this.hompageController.getHomepageData);
        this.router.get('/restaurants', this.restaurantController.getRestaurantsData);
        this.router.post('/restaurants', this.restaurantController.postNewRestaurant);
        this.router.get('/restaurants/new', this.restaurantController.getNewRestauratns);
        this.router.get('/restaurants/open-now', this.restaurantController.getOpenNowRestaurants);
        this.router.get('/restaurants/popular-restaurants', this.restaurantController.getPopularRestaurants);
        this.router.get('/restaurant/:name', this.restaurantController.getRestaurantPageData);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map