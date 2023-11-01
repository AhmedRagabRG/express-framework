import { Router } from "express";
import IController from "src/common/interfaces/IController.js";
import AuthService from "./auth.service.js";
import Authentican from "../../common/middlewares/authentican.js";
import Kernel from "../../common/utilities/kernel.js";

class AuthController implements IController {
    router: Router = Router();
    path: string = "";

    constructor(private authService = new AuthService()) {
        this.initRoutes();
    }

    initRoutes(): void {
        this.router.post(`${this.path}`, Kernel.middleware(['authentican']), this.register.bind(this));
        this.router.get(`${this.path}`, this.login.bind(this));
    }

    public register(req, res, next) {
        this.authService.register(req, res, next);
    }

    public login(req, res, next) {
        this.authService.login(req, res, next);
    }
}


export default AuthController;