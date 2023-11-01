const appConfig = {
  port: process.env.PORT || 8000,
  env: process.env.NODE_ENV || "development",
  salt: process.env.SALT || 10,
  jwt_secret: process.env.JWT_SECRECT || "ahmedragab",
};

export default appConfig;