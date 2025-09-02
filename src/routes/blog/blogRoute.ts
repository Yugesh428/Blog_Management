import { Router } from "express";
import {
  blogbyId,
  getAllBlog,
  postBlog,
  updateBlog,
} from "../../controller/blog/blogController";

const router = Router();

router.route("/").get(getAllBlog).post(postBlog);
router.route("/:id").put(updateBlog).get(blogbyId);

export default router;
