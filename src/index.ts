import express from "express";

import categoryRoutes from "./modules/category/categoryRoutes.js";

const app = express();

// Global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/categories", categoryRoutes);

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