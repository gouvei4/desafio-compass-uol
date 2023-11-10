import { Router } from "express";
import { createTutor, getAllTutors, updateTutor, deleteTutor } from "../controllers/tutorController";

export const tutorRoutes = Router();
tutorRoutes.get("/tutors", getAllTutors);
tutorRoutes.post("/tutor", createTutor);
tutorRoutes.put("/tutor/:id", updateTutor);
tutorRoutes.delete("/tutor/:id", deleteTutor);