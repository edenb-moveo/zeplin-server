import { HomepageHandler } from '../handlers/hompageHandler';
export class HomepageController {
    private homepageHandler: HomepageHandler;
    constructor() {
        this.homepageHandler = new HomepageHandler();
        this.getHomepageData = this.getHomepageData.bind(this)
    }    

    public async getHomepageData(req, res) {
        let data = await this.homepageHandler.getHomepageData()
        res.send(data)
    }
}