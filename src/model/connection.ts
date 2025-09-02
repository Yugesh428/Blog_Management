import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";
config();

import Category from "./category/categoryModel";
import Blog from "./blog/blogModel";

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: Number(process.env.DB_PORT),

  models: [Category, Blog],
});

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Authenticated, connected");
  })
  .catch((error) => {
    console.log("❌ Authentication error:", error);
  });

sequelize.sync({ alter: true }).then(() => {
  console.log("✅ Migrated successfully with new changes");
});

export default sequelize;
