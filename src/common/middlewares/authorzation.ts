import Middleware from "../interfaces/middleware.js";

class Authorzation implements Middleware {
    handler(req, res, next) {
        console.log("Authorzation Middleware");
        // throw new Error('Error from Authorzation')
    }
}

export default Authorzation