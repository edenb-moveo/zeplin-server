import * as express from 'express';
import { AuthController } from '../controllers/AuthController';
import { HomepageController } from '../controllers/HomepageController'
import { RestaurantController } from '../controllers/RestaurantController';
import { AuthValidator } from '../validators/authValidator'
import { AdminController } from '../controllers/AdminController'
export class Routes {
    public router: express.Router
    private hompageController: HomepageController;
    private restaurantController: RestaurantController;
    private authController: AuthController;
    private authValidator: AuthValidator;
    private adminController: AdminController;
    constructor() {
        this.router = express.Router()
        this.hompageController = new HomepageController();
        this.restaurantController = new RestaurantController();
        this.authController = new AuthController();
        this.authValidator = new AuthValidator();
        this.adminController = new AdminController();
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get('/homepage', this.hompageController.getHomepageData)
        this.router.get('/restaurants', this.restaurantController.getRestaurantsData)
        this.router.get('/restaurants/new', this.restaurantController.getNewRestauratns)
        this.router.get('/restaurants/open-now', this.restaurantController.getOpenNowRestaurants)
        this.router.get('/restaurants/popular-restaurants', this.restaurantController.getPopularRestaurants)
        this.router.get('/restaurant/:name', this.restaurantController.getRestaurantPageData)
        this.router.post('/signup', this.authController.signUp);
        this.router.get('/login', this.authController.login);
        this.router.post('/restaurants', [ this.authValidator.verifyToken, this.adminController.postNewRestaurant ])
        this.router.patch('/restaurants', [ this.authValidator.verifyToken, this.adminController.updateRestaurant ])
        this.router.delete('/restaurants',[ this.authValidator.verifyToken, this.adminController.deleteRestaurant ])
        this.router.post('/dishes', [ this.authValidator.verifyToken, this.adminController.postNewDish ])
        this.router.patch('/dishes', [ this.authValidator.verifyToken, this.adminController.updateDish ])
        this.router.delete('/dishes',[ this.authValidator.verifyToken, this.adminController.deleteDish ])
    }

}