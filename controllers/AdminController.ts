import { AdminHandler } from '../handlers/AdminHandler'

export class AdminController {
    private adminHandler: AdminHandler;
    constructor() {
        this.adminHandler = new AdminHandler;
        this.postNewRestaurant = this.postNewRestaurant.bind(this)
        this.updateRestaurant = this.updateRestaurant.bind(this);
        this.deleteRestaurant = this.deleteRestaurant.bind(this);
        this.getAllDishes = this.getAllDishes.bind(this);
        this.postNewDish = this.deleteRestaurant.bind(this);
        this.updateDish = this.updateDish.bind(this);
        this.deleteDish = this.deleteDish.bind(this);
    }

    public async postNewRestaurant(req, res) {
        let newRestaurant = await this.adminHandler.postNewRestaurant(req.body);
        res.send(newRestaurant)
    }

    public async updateRestaurant(req, res) {
        let updatedRestaurant = await this.adminHandler.updateRestaurant(req.body);
        res.send(updatedRestaurant)
    }

    public async deleteRestaurant(req, res) {
        let deletedRestaurant = await this.adminHandler.deleteRestaurant(req._id);
        res.send(deletedRestaurant);
    }

    public async getAllDishes(req,res) {
        let dishes = await this.adminHandler.getAllDishes();
        res.send(dishes);
    }

    public async postNewDish(req, res) {
        let newDish = await this.adminHandler.postNewDish(req.body);
        res.send(newDish)
    }

    public async updateDish(req, res) {
        let updatedDish = await this.adminHandler.updateDish(req.body);
        res.send(updatedDish)
    }

    public async deleteDish(req, res) {
        let deletedDish = await this.adminHandler.deleteDish(req._id);
        res.send(deletedDish);
    }
}