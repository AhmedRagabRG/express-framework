import IController from "../../common/interfaces/IController.js";
import { Router } from "express";
import UsersService from "./users.service.js";
import Kernel from "../../common/utilities/kernel.js";
import Multer from "../../common/services/multer.js";

class UsersController implements IController {
  router: Router = Router();
  path: string = "";
  multer: Multer = new Multer();

  constructor(private usersService = new UsersService()) {
    this.initRoutes();
  }

  initRoutes() {
    this.router.post(`${this.path}`, this.multer.upload().single('avatar'), this.create.bind(this));
  }

  public create(req, res, next) {
    this.usersService.create(req, res, next);
  }
}

export default UsersController;