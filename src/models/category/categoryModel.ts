import mongoose from "mongoose";
import type { ICategoryDoc, ICategoryModel } from "./categoryTypes.js";
import { categoryTranslationsSchema } from "./categorySubschemas.js";


const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true,
        trim: true
    },
    about: {
        type: String,
        required: [true, "About is required"],
        trim: true
    },
    translations: {
        type: Map,
        of: categoryTranslationsSchema,
        default: {}
    }
},{
    timestamps: true
})

const CategoryModel = mongoose.model<ICategoryDoc,ICategoryModel>("Category", categorySchema)

export default CategoryModel;