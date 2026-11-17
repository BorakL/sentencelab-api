import mongoose from "mongoose";

export const categoryTranslationsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    about: {
        type: String,
        required: true,
        trim: true
    }
},
{
    _id: false
})