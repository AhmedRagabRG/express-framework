import appConfig from "../config/app.config.js";
import Middleware from "../interfaces/middleware.js";
import jwt from 'jsonwebtoken';

class Authentican implements Middleware {
    handler(req, res, next) {
        const { authorzation } = req.headers;

        if (authorzation?.includes('Bearer')) {
            const token = authorzation.split(' ')[1];
            const decoded = jwt.verify(token, appConfig.jwt_secret);

            if (!decoded) {
                throw new Error('Invalid token');
            }
        } else {
            throw new Error('Invalid token');
        }
    }
}

export default Authentican;