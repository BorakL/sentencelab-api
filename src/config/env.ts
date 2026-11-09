import dotenv from "dotenv";

dotenv.config();

const env = {
    PROBA: process.env.proba || "Luka",
    MONGO_URI_TEST: process.env.MONGO_URI_TEST,
    PORT: process.env.port || 5000
}

export default env;