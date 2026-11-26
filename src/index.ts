import express from "express";

import categoryRoutes from "./modules/category/categoryRoutes.js";
import expressionRoutes from "./modules/expression/expressionRoutes.js";
import sentenceRoutes from "./modules/sentence/sentenceRoutes.js";
import sentenceTransformationRoutes from "./modules/sentenceTransformation/sentenceTransformationRoutes.js";
import topicRoutes from "./modules/topic/topicRoutes.js";

const app = express();

// Global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/expressions", expressionRoutes);
app.use("/api/sentences", sentenceRoutes);
app.use("/api/sentenceTransformations", sentenceTransformationRoutes);
app.use("/api/topics", topicRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Global error handler
// Treba da bude poslednji middleware
// app.use(errorHandler);

export default app;