import userModel from "../../DB/models/user.model.js";
import { ApiError } from "../../common/utilities/apiError.js";

class UsersService {
  public async create(req, res, next) {
    // const user = new userModel(req.body);
    // const newUser = await user.save();

    // if (!newUser) {
    //   return next(new ApiError(404, "User not created"));
    // }

    // res.json({
    //   msg: "User created successfully",
    //   OK: 200,
    //   newUser,
    // });
    res.json({
      msg: "User created successfully",
      OK: 200,

    })
  }

  public async getUserByEmail(req, res, next) {
    const { email } = req.body;

    if (!email) {
      return next(new ApiError(400, "Email is required"));
    };

    const user = userModel.find({ email })

    if (!user) {
      return next(new ApiError(404, "User not found"));
    };

    return res.json({
      OK: 200,
      user,
    });
  }
}

export default UsersService;