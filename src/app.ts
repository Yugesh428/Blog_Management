import express from "express";
import dotenv from "dotenv";
dotenv.config();
import categoryRoutes from "./routes/category/categoryRoute";
import blogRoutes from "./routes/blog/blogRoute";

const app = express();
app.use(express.json());

app.use("/api/category", categoryRoutes);
app.use("/api/blog", blogRoutes);

export default app;
