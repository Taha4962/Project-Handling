import express from "express";
import { loginAdmin } from "../controllers/Admin/login.controller.js";
import { logoutAdmin } from "../controllers/Admin/logout.controller.js";
import { authenticate, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// Route for admin login
router.post("/login", loginAdmin);

// Route for admin logout
router.post("/logout", authenticate, isAdmin, logoutAdmin);
export default router;
