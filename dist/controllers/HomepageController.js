"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomepageController = void 0;
const hompageHandler_1 = require("../handlers/hompageHandler");
class HomepageController {
    constructor() {
        this.homepageHandler = new hompageHandler_1.HomepageHandler();
        this.getHomepageData = this.getHomepageData.bind(this);
    }
    async getHomepageData(req, res) {
        let data = await this.homepageHandler.getHomepageData();
        res.send(data);
    }
}
exports.HomepageController = HomepageController;
//# sourceMappingURL=HomepageController.js.map