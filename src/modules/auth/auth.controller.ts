import { Router } from "express";
import IController from "src/common/interfaces/IController.js";
import AuthService from "./auth.service.js";

class AuthController implements IController {
    router: Router = Router();
    path: string = "";

    constructor(private usersService = new AuthService()) {
        this.initRoutes();
    }

    initRoutes(): void {
        this.router.post(`${this.path}`, this.register.bind(this));
        this.router.get(`${this.path}`, this.register.bind(this));
    }

    public register(req, res, next) {
        this.usersService.register(req, res, next);
    }

    public login(req, res, next) {
        const getUser = this.usersService.login(req, res, next);
    }
}


export default AuthController;