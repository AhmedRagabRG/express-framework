import UserModel from "../../DB/models/user.model.js";
import UsersService from "../users/users.service.js";
import { ApiError } from "../../common/utilities/apiError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appConfig from "../../common/config/app.config.js";

class AuthService {
    constructor(private usersService = new UsersService()) { }

    public register(req, res, next) {
        this.usersService.create(req, res, next);
    };


    public async login(req, res, next) {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        const verify_password = await bcrypt.compareSync(password, user.password);

        if (!verify_password) {
            throw new ApiError(400, "Invalid credentials");
        }

        const token = jwt.sign({ username: user.username, email: user.email, group: user.group, id: user.id }, appConfig.jwt_secret, { expiresIn: "1m" });

        return res.json({
            OK: 200,
            token,
        });
    };
}

export default AuthService;