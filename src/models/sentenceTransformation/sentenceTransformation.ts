
import mongoose, { Schema } from "mongoose";
import type { ISentenceTransformationDoc, ISentenceTransformationModel } from "./sentenceTransformationTypes.js";
import { transformationGroupSchema, translationSchema } from "./sentenceTransformationSubschema.js";
import { SENTENCE_TRANSFORMATION_TYPES } from "../../types/grammarTypes.js";

const sentenceTransformationSchema = new Schema<ISentenceTransformationDoc,ISentenceTransformationModel>(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        type: {
            type: String,
            enum: SENTENCE_TRANSFORMATION_TYPES,
            required: true,
            trim: true
        },
        explanation: {
            type: String,
            required: true,
            trim: true
        },
        categoryId: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        from: {
            type: String,
            trim: true
        },
        to: {
            type: String,
            trim: true
        },
        taskDescription: {
            type: String,
            required: true,
            trim: true
        },
        keyword: {
            type: String,
            trim: true
        },
        examples: {
            type: [transformationGroupSchema],
            default: []
        },
        translations: {
            type: Map,
            of: translationSchema,
            default: {}
        }
    },
    { timestamps: true }
);


// Model
const SentenceTransformationModel = mongoose.model<ISentenceTransformationDoc,ISentenceTransformationModel>("SentenceTransformation", sentenceTransformationSchema);

export default SentenceTransformationModel;
