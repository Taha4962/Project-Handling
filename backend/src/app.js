import express from "express";
import studentRoutes from "./routes/student.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use student routes
app.use("/api/student", studentRoutes);

// Use admin routes
app.use("/api/admin", adminRoutes);

// Health check route (optional)
app.get("/", (req, res) => {
  res.send("API is running");
});

export { app };
