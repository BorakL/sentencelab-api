import type { Model } from "mongoose"
import type { IBaseQuery } from "../../types/sharedTypes.js"
import type { Document } from "mongoose"


/////////////// GENERATION INTERFACES (Interfaces that will be used at AI generation time) ///////////////


/////////////// SUBSHEMAS INTERFACES ///////////////

export interface ICategoryTranslations{
    title: string,
    about: string
}


/////////////// MAIN (SCHEMA) INTERFACE ///////////////

export interface ICategory {
    title: string,
    about: string,
    translations: Record<string, ICategoryTranslations>
}


/////////////// DOCUMENT, MODEL INTERFACES ///////////////

export interface ICategoryDoc extends ICategory, Document {}
export interface ICategoryModel extends Model<ICategoryDoc>{}


/////////////// PARAMS INTERFACES ///////////////
export interface ICategoryParams {
    title: string,
    about: string,
    translations: Record<string,ICategoryTranslations>
}


/////////////// QUERY INTERFACES ///////////////
export interface ICategoryQuery extends IBaseQuery{
    search?: string;
}