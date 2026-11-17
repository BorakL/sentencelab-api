
import mongoose from "mongoose";
import { EXPRESSION_TYPES } from "../../types/grammarTypes.js";
import type { IExpressionDoc, IExpressionModel } from "./expressionTypes.js";
import { expressionTranslationSchema } from "./expressionSubschemas.js";


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


const ExpressionModel = mongoose.model<IExpressionDoc,IExpressionModel>("Expression", expressionSchema);

export default ExpressionModel;
