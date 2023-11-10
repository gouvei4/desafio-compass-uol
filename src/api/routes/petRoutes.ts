import { Router } from "express";
import { createPet } from "../controllers/petController"

export const router = Router();
router.post("/pet/:tutorId", createPet)