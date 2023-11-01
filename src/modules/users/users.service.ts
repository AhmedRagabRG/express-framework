import appConfig from "../../common/config/app.config.js";
import userModel from "../../DB/models/user.model.js";
import { ApiError } from "../../common/utilities/apiError.js";
import bcrypt from "bcrypt";
import cloudinary from "../../common/config/cloudinary.config.js";

class UsersService {
  public async create(req, res, next) {
    const { username, email, password, phone } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, appConfig.salt);
    const newUser = new userModel({ username, email, password: hashedPassword, phone });

    if (req.file) {
      const { secure_url } = await cloudinary.uploader.upload(req.file.path, { folder: `users/avatar` });
      newUser.avatar = secure_url;
    }

    const savedUser = await newUser.save();

    if (!savedUser) {
      return next(new ApiError(404, "User not created"));
    };

    res.json({
      msg: "User created successfully",
      OK: 200,
      savedUser,
    });
  };

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