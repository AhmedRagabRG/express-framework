import Authorzation from "../middlewares/authorzation.js";
import Authentican from "../middlewares/authentican.js";
import Validator from "../middlewares/validator.js";

const providers = {
    authentican: new Authentican().handler,
    authorzation: new Authorzation().handler,
    validator: new Validator().handler,
};

export default providers;