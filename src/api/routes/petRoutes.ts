import { Router } from "express";
import { createPet, updatePet } from "../controllers/petController";

export const petRoutes = Router();
petRoutes.post("/pet/:tutorId", createPet);
petRoutes.put("/pet/:petId/tutor/:tutorId", updatePet);
