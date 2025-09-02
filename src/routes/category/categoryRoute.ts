import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  singleCategory,
} from "../../controller/category/categoryController";

const router = Router();

router.route("/").get(getAllCategory).post(createCategory);
router.route("/:id").delete(deleteCategory).get(singleCategory);

export default router;
