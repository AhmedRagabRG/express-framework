const databaseConfig = {
  db_user: process.env.DB_USER || 8000,
  db_password: process.env.DB_PASSWORD || "",
  db_name: process.env.DB_NAME || "root",
  db_uri: process.env.DB_URL || 'mongodb+srv://ahmedragabrg:ahmed%40RAGAB010@cluster0.ohc6n3c.mongodb.net/beta?retryWrites=true&w=majority',
};

export default databaseConfig;