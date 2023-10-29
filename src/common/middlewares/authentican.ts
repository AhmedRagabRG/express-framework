import Middleware from "../interfaces/middleware.js";

class Authentican implements Middleware {
    handler(req, res, next) {
        console.log("Authentican Middleware");
        throw new Error('Error from Authentican')
    }
}

export default Authentican;