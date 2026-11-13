import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface ITopicTranslations {
    title: string,
    summary: string,
    explanation: string
}

const topicTranslationsSchema = new mongoose.Schema<ITopicTranslations>({
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

export interface ITopic {
    title: string,
    categoryId: Types.ObjectId,
    summary: string,
    explanation: string,
    generationPrompt: string,
    translations: Record<string, ITopicTranslations>
}

export interface ITopicDoc extends ITopic, Document {}

export interface ITopicModel extends Model<ITopicDoc> {}

export type ITopicParams = Omit<ITopic, "categoryId"> & {
    categoryId: string;
};



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