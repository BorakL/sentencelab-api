import { Schema } from "mongoose";
import type { IGroupItem, ISentenceTransformationTranslation, ITransformationGroup } from "./sentenceTransformationTypes.js";

const groupItemSchema = new Schema<IGroupItem>(
    {
        role: {
            type: String,
            required: true
        },
        sentenceId: {
            type: Schema.Types.ObjectId,
            ref: "Sentence",
            required: true
        },
        order: {
            type: Number,
            required: true
        },
        transformationWord: {
            type: String,
            required: true
        }
    },
    { _id: false }
);


export const transformationGroupSchema = new Schema<ITransformationGroup>(
    {
        transformation: {
            type: [groupItemSchema],
            default: []
        }
    },
    { _id: false }
);


export const translationSchema = new Schema<ISentenceTransformationTranslation>(
    {
        title: {
            type: String,
            required: true
        },
        explanation: {
            type: String,
            required: true
        },
        taskDescription: {
            type: String,
            required: true
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        keyword: {
            type: String,
            required: true
        }
    },
    { _id: false }
);
