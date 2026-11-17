import mongoose, { Schema } from "mongoose";
import { ADVERBIAL_TYPES, EXPRESSION_TYPES } from "../../types/grammarTypes.js";
import type { IAdverbial, IMultipleChoice, ISentenceExpression } from "./sentenceTypes.js";

export const adverbialSchema = new mongoose.Schema<IAdverbial>({
    text: {
        type: String,
        trim: true,
        required: true
    },
    type: {
        type: String,
        enum: ADVERBIAL_TYPES,
        required: true
    }
},{
    _id: false
})

export const sentenceExpressionSchema  = new mongoose.Schema<ISentenceExpression>({
    type: {
        type: String,
        trim: true,
        required: true,
        enum: EXPRESSION_TYPES
    },
    text: {
        type: String,
        trim: true,
        required: true
    },
    startIndex: {
        type: Number,
        required: true,
        min: 0
    },
    endIndex: {
        type: Number,
        required: true,
        min: 0    
    },
    expressionId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Expression"
    }
},{
    _id: false
})


export const multipleChoiceSchema = new Schema<IMultipleChoice>(
  {
    blank: {
      word: {
        type: String,
        required: true,
      },
      start: {
        type: Number,
        required: true,
        min: 0,
      },
      end: {
        type: Number,
        required: true,
        min: 0,
      },
    },
    options: {
      type: [String],
      required: true,
      validate: {
        validator: (options: string[]) => options.length >= 2,
        message: "At least two options are required.",
      },
    },
    correctAnswer: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);