import { Router } from "express";
import { createPet, deletePet, updatePet } from "../controllers/petController";

export const petRoutes = Router();
petRoutes.post("/pet/:tutorId", createPet);
petRoutes.put("/pet/:petId/tutor/:tutorId", updatePet);
petRoutes.delete("/pet/:petId/tutor/:tutorId ", deletePet)
