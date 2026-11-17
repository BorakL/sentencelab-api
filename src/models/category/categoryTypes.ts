import type { Model } from "mongoose"

export interface ICategoryTranslations{
    title: string,
    about: string
}

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