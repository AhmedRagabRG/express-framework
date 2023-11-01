import Middleware from "../interfaces/middleware.js";
import jwt from 'jsonwebtoken';

class IsLoggedIn implements Middleware {
    handler(req, res, next) {
        const { authorzation } = req.headers;
        const token = 
    }
}