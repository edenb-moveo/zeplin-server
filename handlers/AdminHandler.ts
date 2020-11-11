import { Chef } from "../db/models/ChefModel";
import { ChefService } from "../services/ChefService";
import { DishService } from "../services/DishService";
import { RestaurantService } from "../services/RestaurantService";
import { RestaurantHandler } from "./RestaurantHandler";

export class AdminHandler {

    private chefService: ChefService;
    private dishService: DishService;
    private restuarantService: RestaurantService;
    private restaurantHandler: RestaurantHandler;
    constructor() {
        this.chefService = new ChefService();
        this.dishService = new DishService();
        this.restuarantService = new RestaurantService();
        this.restaurantHandler = new RestaurantHandler();
    }
    public async postNewRestaurant(restaurant) {
        try {
            let newRestaurant = await this.restaurantHandler.postNewRestaurant(restaurant);
            return newRestaurant;
        } catch (error) {
            throw new Error(error)
        }
    }
    public async updateRestaurant(restaurant) {
        try {
            let updatedRestaurant = await this.restaurantHandler.updateRestaurant(restaurant);
            return updatedRestaurant;
        } catch (error) {
            throw new Error(error)
        }
    }


    public async deleteRestaurant(id) {
        try {
            let deletedRestaurant = await this.restaurantHandler.deleteRestaurant(id);
            return deletedRestaurant
        } catch (error) {
            throw new Error(error)
        }
    }

    public async getAllDishes() {
        try {
            let dishes = await this.dishService.getAllDishes();
            return dishes;
        } catch (error) {
            throw new Error(error)
        }
    }

    public async postNewDish(dish){
        try {
            let newDish = await this.dishService.postNewDish(dish);
            return newDish;
        } catch (error) {
            throw new Error(error)
        }
    }

    public async updateDish(dish){
        try {
            let updatedDish = await this.dishService.updateDish(dish)
            return updatedDish;
        } catch (error) {
            throw new Error(error)
        }
    }

    public async deleteDish(id) {
        try {
            let deletedDish = await this.dishService.deleteDish(id);
            return deletedDish
        } catch (error) {
            throw new Error(error)
        }
    }

    public async postNewChef(chef) {
        try {
            
        } catch (error) {
            
        }
    }

    public async editChef(name: string) {
        try {
            
        } catch (error) {
            
        }
    }

    public async deleteChef(name: string) {
        try {
            
        } catch (error) {
            
        }
    }
}