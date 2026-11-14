import type { Types } from "mongoose";

export const SENTENCE_TYPES = [
  "simple",
  "expanded-simple",
  "compound",
  "complex",
  "compound-complex"
] as const;
export type SentenceType = (typeof SENTENCE_TYPES)[number];

export const TENSE_TYPES = [
  "present-simple",
  "present-continuous",
  "present-perfect",
  "present-perfect-continuous",
  "past-simple",
  "past-continuous",
  "past-perfect",
  "past-perfect-continuous",
  "future-simple",
  "future-continuous",
  "future-perfect",
  "future-perfect-continuous"
  ] as const;
export type TenseType = (typeof TENSE_TYPES)[number];

export const ADVERBIAL_TYPES = [
  "time",
  "place",
  "manner",
  "frequency",
  "reason",
  "purpose",
  "degree",
  "condition",
  "concession"
]
export type AdverbialType = (typeof ADVERBIAL_TYPES)[number];

export interface IAdverbial {
  text: string;
  type: AdverbialType;
}


export const EXPRESSION_TYPES = [
  "phrasal-verb",
  "idiom",
  "collocation",
  "useful-expression"
]
export type ExpressionType = (typeof EXPRESSION_TYPES)[number];

export interface ISentenceExpression {
  expressionId: Types.ObjectId;
  type: ExpressionType;
  text: string;
  startIndex: number;
  endIndex: number;
}

export const LEVEL_TYPES = [
    "A1",
    "A2",
    "B1",
    "B2",
    "C1",
    "C2"
]
export type LevelType = (typeof LEVEL_TYPES)[number];

export interface IMultipleChoice {
    blank: {
        word: string,
        start: number,
        end: number
    },
    options: string[],
    correctAnswer: string
}