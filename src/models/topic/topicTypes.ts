import type { Model, Types } from "mongoose";

export interface ITopicTranslations {
    title: string,
    summary: string,
    explanation: string
}

export interface ITopic {
    title: string,
    categoryId: Types.ObjectId,
    summary: string,
    explanation: string,
    generationPrompt: string,
    translations: Record<string, ITopicTranslations>
}

export interface ITopicDoc extends ITopic, Document {}

export interface ITopicModel extends Model<ITopicDoc> {}

export type ITopicParams = Omit<ITopic, "categoryId"> & {
    categoryId: string;
};