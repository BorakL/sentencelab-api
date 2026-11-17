import mongoose from "mongoose";
import type { IExpressionTranslation } from "./expressionTypes.js";

export const expressionTranslationSchema = new mongoose.Schema<IExpressionTranslation>(
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