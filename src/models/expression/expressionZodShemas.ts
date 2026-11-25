
import { z } from "zod";
import { EXPRESSION_TYPES } from "../../types/grammarTypes.js";


/////////////// SUBSCHEMAS ///////////////

export const expressionTranslationZodSchema = z.object({
    text: z.string(),
    type: z.string(),
    meaning: z.string()
});


/////////////// MAIN SCHEMA ///////////////

export const expressionZodSchema = z.object({
    text: z.string(),
    normalizedText: z.string(),
    type: z.enum(EXPRESSION_TYPES),
    meaning: z.string(),
    translations: z.record(
        z.string(),
        expressionTranslationZodSchema
    )
});


/////////////// PARAMS SCHEMAS ///////////////

export const expressionCreateParamsZodSchema = expressionZodSchema
    .omit({normalizedText: true})
    .extend({ 
        translations: expressionZodSchema.shape.translations.default({}) 
    });

export const expressionUpdateParamsZodSchema = expressionCreateParamsZodSchema
    .partial()
    .refine(
        data => Object.keys(data).length > 0,
        "At least one field must be provided"
    );