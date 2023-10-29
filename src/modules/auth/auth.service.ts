import UsersService from "../users/users.service.js";

class AuthService {
    constructor(private usersService = new UsersService()) { }

    public register(req, res, next) {
        this.usersService.create(req, res, next);
    };


    public login(req, res, next) {
        this.usersService.create(req, res, next);
    };
}

export default AuthService;