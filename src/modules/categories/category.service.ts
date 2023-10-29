import categoryModel from "../../DB/models/category.model.js";
import { ApiError } from "../../common/utilities/apiError.js";

export class CategoryService {
  async create(req, res, next) {
    const category = new categoryModel(req.body);
    const newCategory = await category.save();

    if (!newCategory) {
      return next(new ApiError(404, "Category not created"));
    }

    res.json({
      msg: "Category created successfully",
      OK: 200,
      newCategory,
    });
  }

  async getCategories(req, res, next) {
    console.log('getCategories');

    res.json({
      msg: 'ok'
    });
    // const page = req.query.page * 1 || 1;
    // const limit = req.query.limit * 1 || 5;
    // const skip = (page - 1) * limit;
    // const categories = await categoryModel.find().skip(skip).limit(limit);

    // if (categories.length === 0) {
    //   return next(new ApiError(200, "Categories is empty"));
    // }

    // res.json({
    //   msg: "Categories fetched successfully",
    //   OK: 200,
    //   categories,
    // });
  }

  async getCategoryById(req, res, next) {
    const { id } = req.params;
    const category = await categoryModel.findById(id);

    if (!category) {
      return next(new ApiError(404, "Invalid category id"));
    }

    res.json({
      msg: "Category fetched successfully",
      OK: 200,
      category,
    });
  }

  async update(req, res, next) {
    const { id } = req.params;
    const updatedCategory = await categoryModel.findByIdAndUpdate(id, req.body);

    if (!updatedCategory) {
      return next(new ApiError(404, "Category not found"));
    }

    res.json({
      msg: "Category updated successfully",
      OK: 200,
    });
  }

  async deleteCategory(req, res, next) {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id);

    if (!category) {
      return next(new ApiError(404, "Invalid category id"));
    }

    res.json({
      msg: "Category deleted successfully",
      OK: 200,
    });
  }
}
