import { Router } from "express";
import { createTutor, getAllTutors, updateTutor } from "../controllers/tutorController";

export const routers = Router();
routers.get("/tutors", getAllTutors);
routers.post("/tutor", createTutor);
routers.put("/tutor/:id", updateTutor)