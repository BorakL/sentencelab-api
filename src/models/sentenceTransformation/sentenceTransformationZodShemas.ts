import { z } from "zod";
import mongoose from "mongoose";
import { SENTENCE_TRANSFORMATION_TYPES } from "../../types/grammarTypes.js";


/////////////// GENERATION SCHEMAS ///////////////

export const transformationRawSentenceSchema = z.object({
    role: z.string().min(1),
    rawSentence: z.string().min(1),
    order: z.number().int(),
    transformationWord: z.string().optional()
});

export const transformationExampleSchema = z.object({
    transformation: z.array(transformationRawSentenceSchema).min(2)
});

export const transformationGenerationResultSchema = z.object({
    examples: z.array(transformationExampleSchema)
});


/////////////// SUBSCHEMAS ///////////////

export const groupItemSchema = z.object({
    role: z.string().min(1),
    sentenceId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid sentence ID"),
    order: z.number().int(),
    transformationWord: z.string().optional()
});

export const transformationGroupSchema = z.object({
    transformation: z.array(groupItemSchema).min(2)
});

export const sentenceTransformationTranslationSchema = z.object({
    title: z.string(),
    explanation: z.string(),
    taskDescription: z.string(),
    from: z.string().optional(),
    to: z.string().optional(),
    keyword: z.string().optional()
});


/////////////// MAIN SCHEMA ///////////////

export const sentenceTransformationSchema = z.object({
    title: z.string().min(1),
    type: z.enum(SENTENCE_TRANSFORMATION_TYPES),
    explanation: z.string(),
    categoryId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid category ID"),
    taskDescription: z.string(),
    from: z.string().optional(),
    to: z.string().optional(),
    keyword: z.string().optional(),
    examples: z.array(transformationGroupSchema),
    translations: z.record(
        z.string(),
        sentenceTransformationTranslationSchema
    ).default({})
});


/////////////// PARAMS SCHEMAS ///////////////

export const sentenceTransformationCreateParamsSchema =
    sentenceTransformationSchema.omit({
        translations: true
    }).extend({
        translations: z.record(
            z.string(),
            sentenceTransformationTranslationSchema
        ).optional()
    });


export const sentenceTransformationUpdateParamsSchema =
    sentenceTransformationCreateParamsSchema
        .partial()
        .refine(
            data => Object.keys(data).length > 0,
            { message: "At least one field must be provided for update" }
        );
