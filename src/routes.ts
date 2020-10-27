import * as express from 'express';
import { HomepageController } from '../controllers/HomepageController'
import { RestaurantController } from '../controllers/RestaurantController';

export class Routes {
    public router: express.Router
    private hompageController: HomepageController;
    private restaurantController: RestaurantController;
    constructor() {
        this.router = express.Router()
        this.hompageController = new HomepageController();
        this.restaurantController = new RestaurantController();

        this.initRoutes();
    }

    private initRoutes() {
        this.router.get('/homepage', this.hompageController.getHomepageData)
        this.router.get('/restaurants', this.restaurantController.getRestaurantsData)
        this.router.post('/restaurants', this.restaurantController.postNewRestaurant)
        this.router.get('/restaurants/new', this.restaurantController.getNewRestauratns)
        this.router.get('/restaurants/open-now', this.restaurantController.getOpenNowRestaurants)
        this.router.get('/restaurants/popular-restaurants', this.restaurantController.getPopularRestaurants)
        this.router.get('/restaurant/:name', this.restaurantController.getRestaurantPageData)
    }

}