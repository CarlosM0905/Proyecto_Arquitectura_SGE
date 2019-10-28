"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({
            text: 'El sistema esta en index'
        });
    }
}
exports.indexController = new IndexController();
exports.default = exports.indexController;
