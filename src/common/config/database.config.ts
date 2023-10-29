const databaseConfig = {
  db_user: process.env.DB_USER || 8000,
  db_password: process.env.DB_PASSWORD || "",
  db_name: process.env.DB_NAME || "root",
  db_uri: process.env.DB_URL || 'mongodb://localhost:27017/ecommerce',
};

export default databaseConfig;