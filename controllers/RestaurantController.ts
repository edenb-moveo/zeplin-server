import { RestaurantHandler } from '../handlers/RestaurantHandler'

export class RestaurantController {
    private restaurantHandler: RestaurantHandler;
    constructor() {
        this.restaurantHandler = new RestaurantHandler();
        this.getRestaurantsData = this.getRestaurantsData.bind(this)
        this.getNewRestauratns = this.getNewRestauratns.bind(this)
        this.getOpenNowRestaurants = this.getOpenNowRestaurants.bind(this)
        this.getPopularRestaurants = this.getPopularRestaurants.bind(this)
        this.postNewRestaurant = this.postNewRestaurant.bind(this)
        this.getRestaurantPageData = this.getRestaurantPageData.bind(this)
    }   

    public async getRestaurantsData(req, res) {
        let data = await this.restaurantHandler.getRestaurantsData()
        res.send(data)
    }

    public async getNewRestauratns(req, res) {
        let restaurants = await this.restaurantHandler.getNewRestaurants();
        res.send(restaurants)
    }
    public async getOpenNowRestaurants(req, res) {
        let restaurants = await this.restaurantHandler.getOpenNowRestaurants();
        res.send(restaurants)
    }

    public async getRestaurantPageData(req, res) {
        let restaurant = await this.restaurantHandler.getRestaurantPageData(req.params.name);
        res.send(restaurant)
    }

    public async getPopularRestaurants(req, res) {
        let restaurants = await this.restaurantHandler.getPopularRestaurants();
        res.send(restaurants)
    }
    
    public async postNewRestaurant(req, res) {
        let restaurant = await this.restaurantHandler.postNewRestaurant(req.body)
        res.send(restaurant)
    }
}