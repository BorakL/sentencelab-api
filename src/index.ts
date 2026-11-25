import express from "express";

import categoryRoutes from "./modules/category/categoryRoutes.js";
import expressionRoutes from "./modules/expression/expressionRoutes.js";

const app = express();

// Global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/expressions", expressionRoutes);

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