import type { Model, Document } from "mongoose";
import type { Types } from "mongoose";
import type { z } from "zod";

import {
    adverbialZodSchema,
    sentenceExpressionZodSchema,
    multipleChoiceZodSchema,
    sentenceZodSchema,
    sentenceCreateParamsZodSchema,
    sentenceUpdateParamsZodSchema
} from "./sentenceZodShemas.js";
import type { ExpressionType } from "../../types/grammarTypes.js";

// GENERATION INTERFACES

// SUBSCHEMAS
export interface IAdverbial extends z.infer<
    typeof adverbialZodSchema
> {}

export interface ISentenceExpression {
    expressionId: Types.ObjectId;
    type: ExpressionType;
    text: string;
    startIndex: number;
    endIndex: number;
}

export interface IMultipleChoice extends z.infer<
    typeof multipleChoiceZodSchema
> {}

// MAIN
export interface ISentence extends z.infer<
    typeof sentenceZodSchema
> {}

// DOCUMENT, MODEL
export interface ISentenceDoc extends ISentence, Document {}
export interface ISentenceModel extends Model<ISentenceDoc> {}

// PARAMS
export interface ISentenceCreateParams extends z.infer<
    typeof sentenceCreateParamsZodSchema
> {}

export interface ISentenceUpdateParams extends z.infer<
    typeof sentenceUpdateParamsZodSchema
> {}

// QUERY