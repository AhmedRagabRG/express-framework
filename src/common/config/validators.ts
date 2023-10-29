import { createUserValidator } from "../validators/user.validator.js";
import Authentican from "../middlewares/authentican.js";
import Validator from "../middlewares/validator.js";

const validators = {
    createUserValidator: createUserValidator,
};

export default validators;