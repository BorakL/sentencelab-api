
import { z } from "zod";


/////////////// SUBSCHEMAS ///////////////

export const topicTranslationsSchema = z.object({
    title: z.string().min(1),
    summary: z.string(),
    explanation: z.string()
});

/////////////// MAIN SCHEMA ///////////////

export const topicSchema = z.object({
    title: z.string().min(1),
    categoryId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid category ID"),
    summary: z.string(),
    explanation: z.string(),
    generationPrompt: z.string(),
    translations: z.record(
        z.string(),
        topicTranslationsSchema
    ).default({})
});


/////////////// PARAMS SCHEMAS ///////////////

export const topicCreateParamsSchema = topicSchema
    .omit({
        translations: true
    })
    .extend({
        translations: z.record(
            z.string(),
            topicTranslationsSchema
        ).optional()
    });


export const topicUpdateParamsSchema = topicCreateParamsSchema
    .partial()
    .refine(
        data => Object.keys(data).length > 0,
        {
            message: "At least one field must be provided for update"
        }
    );