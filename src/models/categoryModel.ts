import mongoose, { Document, Model } from "mongoose";

export interface ICategoryTranslations{
    title: string,
    about: string
}

const categoryTranslationsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    about: {
        type: String,
        required: true,
        trim: true
    }
},
{
    _id: false
})

export interface ICategory {
    title: string,
    about: string,
    translations: Record<string, ICategoryTranslations>
}

export interface ICategoryDoc extends ICategory, Document {}
export interface ICategoryModel extends Model<ICategoryDoc>{}
export interface ICategoryParams {
    title: string,
    about: string,
    translations: Record<string,ICategoryTranslations>
}

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