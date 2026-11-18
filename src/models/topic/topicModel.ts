import mongoose, { Schema } from "mongoose";
import type { ITopicDoc, ITopicModel } from "./topicTypes.js";
import { topicTranslationsSchema } from "./topicSubschemas.js";


const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    explanation: {
        type: String,
        required: true
    },
    generationPrompt: {
        type: String,
        required: true
    },
    translations: {
        type: Map,
        of: topicTranslationsSchema,
        default: {}
    }
},{
    timestamps: true
})

const TopicModel = mongoose.model<ITopicDoc, ITopicModel>("Topic", topicSchema)

export default TopicModel;