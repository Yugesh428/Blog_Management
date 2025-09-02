import { Request, Response } from "express";
import Blog from "../../model/blog/blogModel";
import Category from "../../model/category/categoryModel";

const getAllBlog = async (req: Request, res: Response) => {
  try {
    const getAllBlog = await Blog.findAll({
      include: [
        { model: Category, as: "category", attributes: ["id", "name"] },
      ],
    });
    res.status(200).json({
      message: "Blog fetched Successfully",
      data: getAllBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Cannot fetch blogs",
    });
  }
};

const postBlog = async (req: Request, res: Response) => {
  try {
    const { categoryId, title, description } = req.body;
    if (!categoryId || !title || !description) {
      return res.status(404).json({
        message: "Credintials did not meet",
      });
    }
    const createNewBlog = await Blog.create({
      title,
      description,
      categoryId,
    });
    res.status(200).json({
      message: "blog created Successfully",
      data: createNewBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "unable to create blog ",
    });
  }
};

const blogbyId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "Blog ID is required",
      });
    }

    const getSingleBlog = await Blog.findByPk(id, {
      include: [
        { model: Category, as: "category", attributes: ["id", "name"] },
      ],
    });

    if (!getSingleBlog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      message: "Blog fetched successfully",
      data: getSingleBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Cannot fetch blog",
    });
  }
};

const updateBlog = async function (req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updateBlog = await Blog.findByPk(id);

    if (!updateBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await updateBlog.update({
      title,
      description,
    });

    return res.status(200).json({
      message: "Blog updated successfully",
      data: updateBlog,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({
      message: "Unable to update blog",
    });
  }
};

export { getAllBlog, postBlog, blogbyId, updateBlog };
