import { ChefService } from '../services/ChefService'
import { DishService } from '../services/DishService'
import { RestaurantService } from '../services/RestaurantService'

export class HomepageHandler {

    chefService: ChefService;
    dishService: DishService;
    RestaurantService: RestaurantService;
    constructor() {
        this.chefService = new ChefService();
        this.dishService = new DishService();
        this.RestaurantService = new RestaurantService();       
    }
    public async getHomepageData() {
        try{
            let data = {};
            data["restaurants"] = await this.RestaurantService.getHomepageRestaurantsPhotos();
            data["chefOfTheWeek"] = await this.chefService.getChef("5f8efadfa729142b1bef407a")
            data["dishes"] = await this.dishService.getHomepageDishes();
            return data
        }
        catch(error) {
            throw new Error(error)
        }
    }
}

