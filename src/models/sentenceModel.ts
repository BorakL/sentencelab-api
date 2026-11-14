import mongoose, { Document, Model, Schema } from "mongoose";
import { ADVERBIAL_TYPES, EXPRESSION_TYPES, LEVEL_TYPES, SENTENCE_TYPES, TENSE_TYPES, type IAdverbial, type IMultipleChoice, type ISentenceExpression, type LevelType, type SentenceType, type TenseType } from "../types/index.js";

export interface ISentence {
    text: string;
    topic: string;
    level: LevelType;
    sentenceType: SentenceType;
    primaryTense: TenseType;
    otherTenses: TenseType[];
    hasSubject: boolean;
    hasPassive: boolean;
    hasModal: boolean;
    hasNegation: boolean;
    hasQuestion: boolean;
    hasConditional: boolean;
    hasRelativeClause: boolean;
    hasPhrasalVerb: boolean;
    adverbials: IAdverbial[];
    expressions: ISentenceExpression[];
    multipleChoice: IMultipleChoice;
}

export interface ISentenceDoc extends ISentence, Document{}
export interface ISentenceModel extends Model<ISentenceDoc>{}

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


const sentenceSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    topic: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: String,
        required: true,
        enum: LEVEL_TYPES,
    },
    sentenceType: {
        type: String,
        required: true,
        trim: true,
        enum: SENTENCE_TYPES,
    },
    primaryTense: {
        type: String,
        required: true,
        trim: true,
        enum: TENSE_TYPES 
    },
    otherTenses: {
        type: [String],
        enum: TENSE_TYPES,
        default: []
    },
    hasSubject: {
        type: Boolean,
        required: true
    },
    hasPassive: {
        type: Boolean,
        required: true
    },
    hasModal: {
        type: Boolean,
        required: true
    },
    hasNegation: {
        type: Boolean,
        required: true
    },
    hasQuestion: {
        type: Boolean,
        required: true
    },
    hasConditional: {
        type: Boolean,
        required: true
    },
    hasRelativeClause: {
        type: Boolean,
        required: true
    },
    hasPhrasalVerb: {
        type: Boolean,
        required: true
    },
    adverbials: {
        type: [adverbialSchema],
        default: []
    },
    expressions: {
        type: [sentenceExpressionSchema],
        default: [],
    },
    multipleChoice: {
        type: multipleChoiceSchema
    }
},{
    timestamps: true
})

const SentenceModel = mongoose.model<ISentenceDoc,ISentenceModel>("Sentence", sentenceSchema)

export default SentenceModel;