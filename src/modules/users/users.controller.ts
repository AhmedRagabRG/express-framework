import IController from "../../common/interfaces/IController.js";
import { Router } from "express";
import UsersService from "./users.service.js";
import Kernel from "../../common/utilities/kernel.js";

class UsersController implements IController {
  router: Router = Router();
  path: string = "";

  constructor(private usersService = new UsersService()) {
    this.initRoutes();
  }

  initRoutes() {
    this.router.post(`${this.path}`, Kernel.middleware(['validator: createValidator']), this.create.bind(this));
  }

  public create(req, res, next) {
    this.usersService.create(req, res, next);
  }
}

export default UsersController;