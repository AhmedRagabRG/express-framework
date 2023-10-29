import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

const CategoryModel = mongoose.model("Category", categorySchema);

export default CategoryModel;
