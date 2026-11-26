
import type { Model, Types, Document } from "mongoose";
import type { z, infer as ZodInfer } from "zod";

import {
    topicTranslationsSchema,
    type topicCreateParamsSchema,
    type topicUpdateParamsSchema
} from "./topicZodSchemas.js";


/////////////// SUBSCHEMAS TYPES ///////////////

export interface ITopicTranslations extends z.infer<typeof topicTranslationsSchema> {};

/////////////// MAIN (SCHEMA) INTERFACE ///////////////

export interface ITopic {
    title: string;
    categoryId: Types.ObjectId;
    summary: string;
    explanation: string;
    generationPrompt: string;
    translations: Record<string, ITopicTranslations>;
}


/////////////// DOCUMENT, MODEL INTERFACES ///////////////

export interface ITopicDoc extends ITopic, Document {}

export interface ITopicModel extends Model<ITopicDoc> {}


/////////////// PARAMS TYPES ///////////////

export interface ITopicCreateParams extends z.infer<typeof topicTranslationsSchema> {};
export interface ITopicUpdateParams extends z.infer<typeof topicUpdateParamsSchema> {};