import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import mongoose from "mongoose";
import appConfig from "./common/config/app.config.js";
import databaseConfig from './common/config/database.config.js';
import { errorHandler } from "./common/services/healper.js";
import { ApiError } from "./common/utilities/apiError.js";
import { CategoryController } from "./modules/categories/category.controller.js";
import { CategoryService } from "./modules/categories/category.service.js";
import UsersController from "./modules/users/users.controller.js";
import UsersService from "./modules/users/users.service.js";
import AuthController from "./modules/auth/auth.controller.js";
import AuthService from "./modules/auth/auth.service.js";

class App {
  private app = express();
  private port = appConfig.port;
  private controllers = [new CategoryController(new CategoryService()), new AuthController(new AuthService())];

  constructor() {
    this.initDatabase();
    this.initMiddlewares();
    this.initErrorHandling();
    this.initRoutes();
    this.listen();
  }

  initMiddlewares() {
    this.app.use(express.json());
    this.app.use(errorHandler);
  }

  initDatabase() {
    mongoose
      .connect(databaseConfig.db_uri)
      .then(() => {
        console.log("[DB] => Database connected");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  initRoutes() {
    this.controllers.forEach((controller) => {
      this.app.use('', controller.router)
    })

    this.app.all("*", (req, res, next) => {
      next(new ApiError(404, `Can't find ${req.originalUrl} on this server`));
    });
  }

  initErrorHandling() {
    // on('uncaughtException', (err) => {
    //   new ApiError(404, `${err.message}`);
    // })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`[SV] => Server running on port ${this.port}`);
    });
  }
}

new App();
