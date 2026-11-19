import type { Model, Document } from "mongoose";
import type { IBaseQuery } from "../../types/sharedTypes.js";
import type { z } from "zod";
import type { categoryCreateParamsZodSchema, categoryTranslationZodSchema, categoryUpdateParamsZodSchema, categoryZodSchema } from "./categoryZodShemas.js";



/////////////// GENERATION INTERFACES ///////////////


/////////////// SUBSCHEMAS INTERFACES ///////////////

export interface ICategoryTranslations extends z.infer<typeof categoryTranslationZodSchema> {}


/////////////// MAIN (SCHEMA) INTERFACE ///////////////

export interface ICategory extends z.infer<typeof categoryZodSchema> {}


/////////////// DOCUMENT, MODEL INTERFACES ///////////////

export interface ICategoryDoc extends ICategory, Document {}
export interface ICategoryModel extends Model<ICategoryDoc> {}


/////////////// PARAMS INTERFACES (PARAMS CREATE, PARAMS UPDATE) ///////////////

export interface ICategoryCreateParams extends z.infer<typeof categoryCreateParamsZodSchema> {}
export interface ICategoryUpdateParams extends z.infer<typeof categoryUpdateParamsZodSchema> {}


/////////////// QUERY INTERFACES ///////////////

export interface ICategoryQuery extends IBaseQuery {
    search?: string;
}