import IController from "../../common/interfaces/IController.js";
import { Router } from "express";
import { CategoryService } from "./category.service.js";
import Kernel from "../../common/utilities/kernel.js";

export class CategoryController implements IController {
  router: Router = Router();
  path: string = "/categories";

  constructor(private categoryService = new CategoryService()) {
    this.initRoutes();
  }

  initRoutes() {
    this.router.post(`${this.path}`, this.create.bind(this));
    this.router.get(`${this.path}`, Kernel.middleware(['authentican', 'authorzation']), this.getCategories.bind(this));
    this.router.get(`${this.path}/:id`, this.getCategoryById.bind(this));
    this.router.patch(`${this.path}/:id`, this.update.bind(this));
    this.router.delete(`${this.path}/:id`, this.delete.bind(this));
  }

  create(req, res, next) {
    this.categoryService.create(req, res, next);
  }

  getCategories(req, res, next) {
    this.categoryService.getCategories(req, res, next);
  }

  getCategoryById(req, res, next) {
    this.categoryService.getCategoryById(req, res, next);
  }

  update(req, res, next) {
    this.categoryService.update(req, res, next);
  }

  delete(req, res, next) {
    this.categoryService.deleteCategory(req, res, next);
  }
}
