import { z } from "zod";
import { ADVERBIAL_TYPES, EXPRESSION_TYPES, SENTENCE_TYPES, TENSE_TYPES } from "../../types/grammarTypes.js";
import { LEVEL_TYPES } from "../../types/sharedTypes.js";


/////////////// SUBSCHEMAS ///////////////

export const adverbialZodSchema = z.object({
    text: z.string(),
    type: z.enum(ADVERBIAL_TYPES)
});

export const sentenceExpressionZodSchema = z.object({
    expressionId: z.string().regex(/^[0-9a-fA-F]{24}$/),
    type: z.enum(EXPRESSION_TYPES),
    text: z.string(),
    startIndex: z.number().int().nonnegative(),
    endIndex: z.number().int().nonnegative()
});

export const multipleChoiceZodSchema = z.object({
    blank: z.object({
        word: z.string(),
        start: z.number().int().nonnegative(),
        end: z.number().int().nonnegative()
    }),
    options: z.array(z.string()),
    correctAnswer: z.string()
});


/////////////// MAIN SCHEMA ///////////////

export const sentenceZodSchema = z.object({
    text: z.string(),
    topic: z.string(),
    level: z.enum(LEVEL_TYPES),
    sentenceType: z.enum(SENTENCE_TYPES),

    primaryTense: z.enum(TENSE_TYPES),
    otherTenses: z.array(z.enum(TENSE_TYPES)),

    hasSubject: z.boolean(),
    hasPassive: z.boolean(),
    hasModal: z.boolean(),
    hasNegation: z.boolean(),
    hasQuestion: z.boolean(),
    hasConditional: z.boolean(),
    hasRelativeClause: z.boolean(),
    hasPhrasalVerb: z.boolean(),

    adverbials: z.array(adverbialZodSchema),
    expressions: z.array(sentenceExpressionZodSchema),

    multipleChoice: multipleChoiceZodSchema
});


/////////////// PARAMS SCHEMAS ///////////////

export const sentenceCreateParamsZodSchema = sentenceZodSchema.extend({
    multipleChoice: multipleChoiceZodSchema.optional()
});

export const sentenceUpdateParamsZodSchema = sentenceCreateParamsZodSchema
    .partial()
    .refine(
        data => Object.keys(data).length > 0,
        "At least one field must be provided"
    );