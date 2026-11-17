import mongoose from "mongoose";
import {  LEVEL_TYPES } from "../../types/sharedTypes.js";
import { SENTENCE_TYPES, TENSE_TYPES } from "../../types/grammarTypes.js";
import { adverbialSchema, multipleChoiceSchema, sentenceExpressionSchema } from "./sentenceSubschemas.js";
import type { ISentenceDoc, ISentenceModel } from "./sentenceTypes.js";


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