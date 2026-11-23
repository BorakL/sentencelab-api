import env from "./config/env.js";
import connectDB from "./config/db.js";
import app from "./index.js";

const port = env.PORT;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();