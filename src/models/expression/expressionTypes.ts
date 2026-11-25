
import type { Model, Document } from "mongoose";
import type { z } from "zod";

import {
    expressionTranslationZodSchema,
    expressionZodSchema,
    expressionCreateParamsZodSchema,
    expressionUpdateParamsZodSchema
} from "./expressionZodShemas.js";


/////////////// GENERATION INTERFACES ///////////////


/////////////// SUBSCHEMAS INTERFACES ///////////////

export interface IExpressionTranslation extends z.infer<
    typeof expressionTranslationZodSchema
> {}


/////////////// MAIN (SCHEMA) INTERFACE ///////////////

export interface IExpression extends z.infer<
    typeof expressionZodSchema
> {}


/////////////// DOCUMENT, MODEL INTERFACES ///////////////

export interface IExpressionDoc extends IExpression, Document {}

export interface IExpressionModel extends Model<IExpressionDoc> {}


/////////////// PARAMS INTERFACES ///////////////

export interface IExpressionCreateParams extends z.infer<
    typeof expressionCreateParamsZodSchema
> {}

export interface IExpressionUpdateParams extends z.infer<
    typeof expressionUpdateParamsZodSchema
> {}


/////////////// QUERY INTERFACES ///////////////
