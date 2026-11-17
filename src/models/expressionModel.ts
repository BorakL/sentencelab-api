
import mongoose, {
  type Model,
  type Document
} from "mongoose";

import {
  EXPRESSION_TYPES,
  type ExpressionType
} from "../types/index.js";


export interface IExpressionTranslation {
  text: string;
  type: string;
  meaning: string;
}


const expressionTranslationSchema =
  new mongoose.Schema<IExpressionTranslation>(
    {
      text: {
        type: String,
        required: true,
        trim: true
      },
      type: {
        type: String,
        required: true,
        trim: true
      },
      meaning: {
        type: String,
        required: true,
        trim: true
      }
    },
    {
      _id: false
    }
  );


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


const expressionSchema = new mongoose.Schema<IExpressionDoc>(
  {
    text: {
      type: String,
      required: true,
      trim: true
    },
    normalizedText: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      enum: EXPRESSION_TYPES,
      required: true
    },
    meaning: {
      type: String,
      required: true,
      trim: true
    },
    translations: {
      type: Map,
      of: expressionTranslationSchema,
      default: {}
    }
  },
  {
    timestamps: true
  }
);


// Sprečavanje duplikata
expressionSchema.index(
  { normalizedText: 1, type: 1 },
  { unique: true }
);


const ExpressionModel = mongoose.model<
  IExpressionDoc,
  IExpressionModel
>("Expression", expressionSchema);

export default ExpressionModel;
