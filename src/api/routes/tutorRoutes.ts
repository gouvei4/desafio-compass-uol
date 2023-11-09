import { Router } from "express";
import { getAllTutors } from "../controllers/tutorController";

export const routers = Router();
routers.get("/tutors", getAllTutors);
