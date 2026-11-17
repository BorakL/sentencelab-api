import mongoose from "mongoose";
import type { ITopicTranslations } from "./topicTypes.js";

export const topicTranslationsSchema = new mongoose.Schema<ITopicTranslations>({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    explanation: {
        type: String, 
        required: true
    }
},
{
    _id: false
})