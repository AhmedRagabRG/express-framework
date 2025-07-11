import { Router } from 'express';

export default interface IController {
    router: Router;
    path: string;
    initRoutes(): void;
}
