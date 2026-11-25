import type { Model, Types } from "mongoose";
import type z from "zod";
import type {  sentenceTransformationCreateParamsSchema, sentenceTransformationSchema, sentenceTransformationTranslationSchema, sentenceTransformationUpdateParamsSchema, transformationExampleSchema, transformationGenerationResultSchema, transformationRawSentenceSchema } from "./sentenceTransformationZodShemas.js";


/////////////// GENERATION INTERFACES (Interfaces that will be used at AI generation time) ///////////////
export interface ITransformationRawSentence extends z.infer<typeof transformationRawSentenceSchema> {}
export interface ITransformationExample extends z.infer<typeof transformationExampleSchema> {}
export interface ITransformationGenerationResult extends z.infer<typeof transformationGenerationResultSchema> {}


/////////////// SUBSHEMAS INTERFACES ///////////////
export interface IGroupItem {
    role: string;
    sentenceId: Types.ObjectId;
    order: number;
    transformationWord?: string;
}
export interface ITransformationGroup {
    transformation: IGroupItem[];
}
export interface ISentenceTransformationTranslation extends z.infer<typeof sentenceTransformationTranslationSchema> {}


/////////////// MAIN (SCHEMA) INTERFACE ///////////////
export interface ISentenceTransformation extends z.infer<typeof sentenceTransformationSchema> {}


/////////////// DOCUMENT, MODEL INTERFACES ///////////////
export interface ISentenceTransformationDoc extends ISentenceTransformation, Document {}
export interface ISentenceTransformationModel extends Model<ISentenceTransformationDoc> {}


/////////////// PARAMS INTERFACES ///////////////
export type SentenceTransformationCreateParams = z.infer<typeof sentenceTransformationCreateParamsSchema>;
export type SentenceTransformationUpdateParams = z.infer<typeof sentenceTransformationUpdateParamsSchema>;


/////////////// QUERY INTERFACES ///////////////

