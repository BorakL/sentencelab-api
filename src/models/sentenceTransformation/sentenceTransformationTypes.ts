import type { Model, Types } from "mongoose";
import type { SentenceTransformationType } from "../../types/grammarTypes.js";

/////////////// GENERATION INTERFACES (Interfaces that will be used at AI generation time) ///////////////
export interface ITransformationRawSentence {
    role: string;
    rawSentence: string;
    order: number;
    transformationWord?: string;
}

export interface ITransformationExample {
    transformation: ITransformationRawSentence[];
}

export interface ITransformationGenerationResult {
    examples: ITransformationExample[];
}


/////////////// SUBSHEMAS INTERFACES ///////////////
export interface IGroupItem {
    role: string;
    sentenceId: Types.ObjectId;
    order: number;
    transformationWord?: string
}

export interface ITransformationGroup {
    transformation: IGroupItem[];
}

export interface ISentenceTransformationTranslation {
    title: string;
    explanation: string;
    taskDescription: string;
    from?: string,
    to?: string,
    keyword?: string
}


/////////////// MAIN (SCHEMA) INTERFACE ///////////////
export interface ISentenceTransformation {
    title: string;
    type: SentenceTransformationType;
    explanation: string;
    categoryId: Types.ObjectId;
    taskDescription: string;
    from?: string;
    to?: string;
    keyword?: string;
    examples: ITransformationGroup[];
    translations: Record<string, ISentenceTransformationTranslation>;
}


/////////////// DOCUMENT, MODEL INTERFACES ///////////////
export interface ISentenceTransformationDoc extends ISentenceTransformation, Document {}

export interface ISentenceTransformationModel extends Model<ISentenceTransformationDoc> {}


/////////////// PARAMS INTERFACES ///////////////
export type ISentenceTransformationParams =
    Omit<ISentenceTransformation, "categoryId" | "translations"> & {
        categoryId: string;
        translations?: Record<string, ISentenceTransformationTranslation>;
    };


/////////////// QUERY INTERFACES ///////////////

