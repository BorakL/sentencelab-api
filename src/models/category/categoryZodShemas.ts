import z from "zod";

/////////////// SUBSCHEMAS ///////////////

export const categoryTranslationZodSchema = z.object({
    title: z.string(),
    about: z.string()
})


/////////////// MAIN SCHEMA ///////////////

export const categoryZodSchema = z.object({
    title: z.string(),
    about: z.string(),
    translations: z.record(
        z.string(),
        categoryTranslationZodSchema
    )
})


/////////////// PARAMS SCHEMAS ///////////////

export const categoryCreateParamsZodSchema = categoryZodSchema;

export const categoryUpdateParamsZodSchema = categoryZodSchema
    .partial()
    .refine(
        data => Object.keys(data).length > 0,
        "At least one field must be provided"
    )