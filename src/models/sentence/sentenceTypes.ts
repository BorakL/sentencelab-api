import type { Model, Types } from "mongoose";
import type { AdverbialType, ExpressionType, sentenceType, TenseType } from "../../types/grammarTypes.js";
import type { LevelType } from "../../types/sharedTypes.js";

/////////////// GENERATION INTERFACES (Interfaces that will be used at AI generation time) ///////////////


/////////////// SUBSHEMAS INTERFACES ///////////////
export interface IAdverbial {
  text: string;
  type: AdverbialType;
}

export interface ISentenceExpression {
  expressionId: Types.ObjectId;
  type: ExpressionType;
  text: string;
  startIndex: number;
  endIndex: number;
}

export interface IMultipleChoice {
    blank: {
        word: string,
        start: number,
        end: number
    },
    options: string[],
    correctAnswer: string
}


/////////////// MAIN (SCHEMA) INTERFACE ///////////////

export interface ISentence {
    text: string;
    topic: string;
    level: LevelType;
    sentenceType: sentenceType;
    primaryTense: TenseType;
    otherTenses: TenseType[];
    hasSubject: boolean;
    hasPassive: boolean;
    hasModal: boolean;
    hasNegation: boolean;
    hasQuestion: boolean;
    hasConditional: boolean;
    hasRelativeClause: boolean;
    hasPhrasalVerb: boolean;
    adverbials: IAdverbial[];
    expressions: ISentenceExpression[];
    multipleChoice: IMultipleChoice;
}


/////////////// DOCUMENT, MODEL INTERFACES ///////////////

export interface ISentenceDoc extends ISentence, Document{}
export interface ISentenceModel extends Model<ISentenceDoc>{}


/////////////// PARAMS INTERFACES ///////////////


/////////////// QUERY INTERFACES ///////////////