import type { Model } from "mongoose";
import type { ExpressionType } from "../../types/grammarTypes.js";

export interface IExpressionTranslation {
  text: string;
  type: string;
  meaning: string;
}

export interface IExpression {
  text: string;
  normalizedText: string;
  type: ExpressionType;
  meaning: string;
  translations: Map<string, IExpressionTranslation>;
}


export type IExpressionParams = Omit<
  IExpression,
  "normalizedText" | "translations"
> & {
  translations?: Record<string, IExpressionTranslation>;
};

export interface IExpressionDoc extends IExpression, Document {}

export interface IExpressionModel extends Model<IExpressionDoc> {}