import { Router } from "express";
import { createTutor, getAllTutors, updateTutor, deleteTutor } from "../controllers/tutorController";

export const routers = Router();
routers.get("/tutors", getAllTutors);
routers.post("/tutor", createTutor);
routers.put("/tutor/:id", updateTutor);
routers.delete("/tutor/:id", deleteTutor);