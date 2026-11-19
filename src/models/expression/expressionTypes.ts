import type { Model } from "mongoose";
import type { ExpressionType } from "../../types/grammarTypes.js";


/////////////// GENERATION INTERFACES (Interfaces that will be used at AI generation time) ///////////////


/////////////// SUBSHEMAS INTERFACES ///////////////
export interface IExpressionTranslation {
  text: string;
  type: string;
  meaning: string;
}


/////////////// MAIN (SCHEMA) INTERFACE ///////////////
export interface IExpression {
  text: string;
  normalizedText: string;
  type: ExpressionType;
  meaning: string;
  translations: Map<string, IExpressionTranslation>;
}


/////////////// DOCUMENT, MODEL INTERFACES ///////////////

export interface IExpressionDoc extends IExpression, Document {}
export interface IExpressionModel extends Model<IExpressionDoc> {}


/////////////// PARAMS INTERFACES ///////////////

export type IExpressionParams = Omit<IExpression, "normalizedText" | "translations"> & {
  translations?: Record<string, IExpressionTranslation>;
};


/////////////// QUERY INTERFACES ///////////////