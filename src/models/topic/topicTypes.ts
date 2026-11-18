import type { Model, Types } from "mongoose";

/////////////// GENERATION INTERFACES (Interfaces that will be used at AI generation time) ///////////////


/////////////// SUBSHEMAS INTERFACES ///////////////
export interface ITopicTranslations {
    title: string,
    summary: string,
    explanation: string
}


/////////////// MAIN (SCHEMA) INTERFACE ///////////////
export interface ITopic {
    title: string,
    categoryId: Types.ObjectId,
    summary: string,
    explanation: string,
    generationPrompt: string,
    translations: Record<string, ITopicTranslations>
}


/////////////// DOCUMENT, MODEL INTERFACES ///////////////

export interface ITopicDoc extends ITopic, Document {}
export interface ITopicModel extends Model<ITopicDoc> {}


/////////////// PARAMS INTERFACES ///////////////

export type ITopicParams = Omit<ITopic, "categoryId"> & {
    categoryId: string;
};


/////////////// QUERY INTERFACES ///////////////