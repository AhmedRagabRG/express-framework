import Middleware from "../interfaces/middleware.js";
import { validationResult } from "express-validator";
import { ApiError } from "../utilities/apiError.js";

class Validator implements Middleware {
    handler(req: any, res: any, next: any): void {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new ApiError(400, "Validation Error" + errors.array());
        }
    }
}

export default Validator;