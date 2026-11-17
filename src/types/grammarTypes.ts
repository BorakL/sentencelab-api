export const SENTENCE_TYPES = [
  "simple",
  "expanded-simple",
  "compound",
  "complex",
  "compound-complex"
] as const;
export type sentenceType = (typeof SENTENCE_TYPES)[number];

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


export const EXPRESSION_TYPES = [
  "phrasal-verb",
  "idiom",
  "collocation",
  "useful-expression"
] as const;
export type ExpressionType = (typeof EXPRESSION_TYPES)[number];


