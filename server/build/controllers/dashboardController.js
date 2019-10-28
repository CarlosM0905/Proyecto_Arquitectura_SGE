"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class DashboardController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM empleado', (err, result, fields) => {
                if (err)
                    throw err;
                res.json(result);
                console.log(result);
                console.log(fields);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO empleado SET ?', [req.body]);
            res.json({ text: 'Empleado guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM empleado WHERE emp_id = ?', [id]);
            res.json({ message: 'El empleado fue despedido' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE empleado SET ? WHERE emp_id = ?', [req.body, id]);
            res.json({ text: "El empleado fue actualizado" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM empleado WHERE emp_id = ?', [id], (err, result, fields) => {
                if (err)
                    throw err;
                console.log(result[0]);
                res.status(404).json({ text: 'Empleado encontrado' });
            });
            res.status(404).json({ text: 'Empleado no encontrado' });
        });
    }
}
exports.dashboardController = new DashboardController();
exports.default = exports.dashboardController;
