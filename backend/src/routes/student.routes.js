import express from "express";
import { registerStudent } from "../controllers/Student/register.controller.js";
import { loginStudent } from "../controllers/Student/login.controller.js";
import { logoutStudent } from "../controllers/Student/logout.controller.js";

import { authenticate, isStudent } from "../middleware/auth.middleware.js";

const router = express.Router();

// Route for student registration
router.post("/register", registerStudent);

// Route for student login
router.post("/login", loginStudent);

// Route for student logout
router.post("/logout", authenticate, isStudent, logoutStudent);

export default router;
