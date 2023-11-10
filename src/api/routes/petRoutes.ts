import { Router } from "express";
import { createPet } from "../controllers/petController"

export const petRoutes = Router();
petRoutes.post("/pet/:tutorId", createPet)