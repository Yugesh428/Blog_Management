import Category from "../../model/category/categoryModel";
import Blog from "../../model/blog/blogModel";
import { Request, Response } from "express";

const getAllCategory = async function (req: Request, res: Response) {
  try {
    const fetchAllCategories = await Category.findAll({
      include: [{ model: Blog, as: "blog" }],
    });

    res.status(200).json({
      message: "fetched all categories successfully",
      data: fetchAllCategories,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Cannot fetch all categories",
    });
  }
};

const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        message: "Requirement does not meet",
      });
    }

    const createNewCategory = await Category.create({
      name,
      description,
    });

    res.status(201).json({
      message: "Category created successfully",
      data: createNewCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Cannot create category",
    });
  }
};

const singleCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "Category ID is required",
      });
    }

    const getSingleCategory = await Category.findByPk(id, {
      include: [{ model: Blog, as: "blog" }],
    });

    if (!getSingleCategory) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.status(200).json({
      message: "Category fetched successfully",
      data: getSingleCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Cannot fetch category",
    });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "No category with that id ",
      });
    }

    const deletedCount = await Category.destroy({
      where: { id },
    });

    if (!deletedCount) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to delete category",
    });
  }
};

export { createCategory, deleteCategory, getAllCategory, singleCategory };
