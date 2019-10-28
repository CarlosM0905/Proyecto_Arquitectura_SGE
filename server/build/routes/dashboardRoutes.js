"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controllers/dashboardController");
class DashboardRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', dashboardController_1.dashboardController.list);
        this.router.get('/:id', dashboardController_1.dashboardController.getOne);
        this.router.post('/', dashboardController_1.dashboardController.create);
        this.router.delete('/:id', dashboardController_1.dashboardController.delete);
        this.router.put('/:id', dashboardController_1.dashboardController.update);
    }
}
const dashboardRoutes = new DashboardRoutes();
exports.default = dashboardRoutes.router;
