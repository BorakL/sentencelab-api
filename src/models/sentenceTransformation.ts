
import mongoose, { Document, Model, Schema, Types } from "mongoose";

export type SentenceTransformationType =
    | "word-formation"
    | "sentence-transformation"
    | "keyword-transformation"; 

/* =====================================================
   1. PRIVREMENI TIPOVI – AI GENERISANJE
   ===================================================== */

// Jedna sirova rečenica koju AI generiše u prvoj fazi.
// Ovaj objekat se NE čuva u SentenceTransformation kolekciji.
export interface ITransformationRawSentence {
    role: string;
    rawSentence: string;
    order: number;
    transformationWord?: string;
}

// Jedan primer transformacije.
// Na primer: active -> passive.
// Sadrži niz sirovih rečenica.
export interface ITransformationExample {
    transformation: ITransformationRawSentence[];
    // Ključna reč za keyword transformation.
    // Svaki primer može imati drugu ključnu reč.
}

// Rezultat prve faze AI generisanja.
// AI vraća niz primera transformacije.
export interface ITransformationGenerationResult {
    examples: ITransformationExample[];
}


/* =====================================================
   2. KONAČNI TIPOVI – MONGODB
   ===================================================== */

// Jedan korak transformacije u konačnom dokumentu.
// Umesto rawSentence čuvamo referencu na Sentence dokument.
export interface IGroupItem {
    role: string;
    sentenceId: Types.ObjectId;
    order: number;
    transformationWord?: string
}

// Jedan primer transformacije.
// Sadrži reference na već kreirane Sentence dokumente.
export interface ITransformationGroup {
    transformation: IGroupItem[];
}

// Prevod osnovnih informacija o transformaciji.
export interface ISentenceTransformationTranslation {
    title: string;
    explanation: string;
    taskDescription: string;
    from?: string,
    to?: string,
    keyword?: string
}


/* =====================================================
   3. GLAVNI SENTENCE TRANSFORMATION TIP
   ===================================================== */

export interface ISentenceTransformation {
    title: string;
    type: SentenceTransformationType;
    explanation: string;
    categoryId: Types.ObjectId;
    taskDescription: string;
    from?: string;
    to?: string;
    keyword?: string;


    // Ovde čuvamo samo ID-jeve Sentence dokumenata.
    // Nema rawSentence polja.
    examples: ITransformationGroup[];

    translations: Record<string, ISentenceTransformationTranslation>;
}

export interface ISentenceTransformationDoc
    extends ISentenceTransformation, Document {}

export interface ISentenceTransformationModel
    extends Model<ISentenceTransformationDoc> {}

// Frontend šalje categoryId kao string.
// Prevodi mogu da se dodaju naknadno.
export type ISentenceTransformationParams =
    Omit<ISentenceTransformation, "categoryId" | "translations"> & {
        categoryId: string;
        translations?: Record<string, ISentenceTransformationTranslation>;
    };


/* =====================================================
   5. GROUP ITEM SCHEMA
   ===================================================== */

// Jedna rečenica unutar primera transformacije.
const groupItemSchema = new Schema<IGroupItem>(
    {
        role: {
            type: String,
            required: true
        },
        sentenceId: {
            type: Schema.Types.ObjectId,
            ref: "Sentence",
            required: true
        },
        order: {
            type: Number,
            required: true
        },
        transformationWord: {
            type: String,
            required: true
        }
    },
    { _id: false }
);


/* =====================================================
   6. TRANSFORMATION GROUP SCHEMA
   ===================================================== */

// Jedan primer transformacije koji sadrži više rečenica.
const transformationGroupSchema = new Schema<ITransformationGroup>(
    {
        transformation: {
            type: [groupItemSchema],
            default: []
        }
    },
    { _id: false }
);


/* =====================================================
   7. TRANSLATION SCHEMA
   ===================================================== */

const translationSchema = new Schema<ISentenceTransformationTranslation>(
    {
        title: {
            type: String,
            required: true
        },
        explanation: {
            type: String,
            required: true
        },
        taskDescription: {
            type: String,
            required: true
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        keyword: {
            type: String,
            required: true
        }
    },
    { _id: false }
);


/* =====================================================
   8. GLAVNA MONGOOSE SCHEMA
   ===================================================== */

const sentenceTransformationSchema = new Schema<
    ISentenceTransformationDoc,
    ISentenceTransformationModel
>(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        type: {
            type: String,
            enum: [
                "word-formation",
                "sentence-transformation",
                "keyword-transformation"
            ],
            required: true,
            trim: true
        },
        explanation: {
            type: String,
            required: true,
            trim: true
        },
        categoryId: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        from: {
            type: String,
            trim: true
        },
        to: {
            type: String,
            trim: true
        },
        taskDescription: {
            type: String,
            required: true,
            trim: true
        },
        keyword: {
            type: String,
            trim: true
        },
        examples: {
            type: [transformationGroupSchema],
            default: []
        },
        translations: {
            type: Map,
            of: translationSchema,
            default: {}
        }
    },
    { timestamps: true }
);


// Model
const SentenceTransformationModel = mongoose.model<
    ISentenceTransformationDoc,
    ISentenceTransformationModel
>("SentenceTransformation", sentenceTransformationSchema);

export default SentenceTransformationModel;
