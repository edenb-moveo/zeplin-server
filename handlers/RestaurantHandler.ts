import { RestaurantService } from '../services/RestaurantService';
import { DishService } from '../services/DishService';
export class RestaurantHandler {
    restraurantService: RestaurantService;
    dishService: DishService;
    constructor() {
        this.restraurantService = new RestaurantService()
    }

    public async getRestaurantsData() {
        try {
            let restaurants = await this.restraurantService.getRestaurantsData();
            return restaurants
        }
        catch(error) {
            throw new Error(error)
        }
    }

    public async getNewRestaurants() { 
        try {
            let restaurants = await this.restraurantService.getNewRestaurants();
            return restaurants
        }
        catch(error) {
            throw new Error(error)
        }
    }
    public async getOpenNowRestaurants() {
        try{
            let restaurants = await this.restraurantService.getOpenNowRestaurants();
            return restaurants
        }
        catch(error) {
            throw new Error(error)
        }
    }

    public async getPopularRestaurants() {
        try{       
            let restaurants = await this.restraurantService.getPopularRestaurants();
            return restaurants
        }
        catch(error) {
            throw new Error(error)
        }
    }

    public async postNewRestaurant(restaurant) {
        try{
            let breakFastDishes = [];
            let lunchDishes = [];
            for(let i = 0; i<restaurant.breakFastDishes.length;i++) {
                let dish = await this.dishService.postNewDish(restaurant.breakFastDishes[i])
                breakFastDishes.push(dish)
            }
            for( let i = 0; i<restaurant.lunchDishes.length; i++) {
                let dish = await this.dishService.postNewDish(restaurant.lunchDishes[i])
                lunchDishes.push(dish) 
            }
            let newRestaurnt = await this.restraurantService.postNewRestaurant(restaurant, breakFastDishes, lunchDishes);
            return newRestaurnt;
        }
        catch(error) {
            throw new Error(error)
        }
    }

    public async getRestaurantPageData(name: string) {
        try {
            let restaurant = await this.restraurantService.getRestaurantPageData(name)
            return restaurant
        }
        catch(error) {
            throw new Error(error)
        }
    }

    public async updateRestaurant(restaurant) {
        try {
            let updatedRestaurant = await this.restraurantService.updateRestaurant(restaurant);
            return updatedRestaurant;
        } catch (error) {
            throw new Error(error)
        }
    }

    public async deleteRestaurant(id) {
        try {
            let deletedRestaurant = await this.restraurantService.deleteRestaurant(id);
            return deletedRestaurant
        } catch (error) {
            throw new Error(error)
        }
    }
}