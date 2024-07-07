import express from "express"
import { getMe, login, logout, signup, adminLogin, adminLogout, getAdmin } from "../controllers/auth.controller.js";
import { protectRoute, protectRouteAdmin } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/me",protectRoute, getMe);

router.get("/admin",protectRouteAdmin, getAdmin);

router.post("/signup", signup);


router.post("/login", login)

router.post("/adminLogin", adminLogin);

router.post("/adminLogout", adminLogout);

router.post("/logout", logout)

export default router