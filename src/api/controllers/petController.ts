import { Request, Response } from "express";
import { createPetServices } from "../services/petServices";
import { Pet } from "../models/pet";

export const createPet = async (request: Request, response: Response) => {
  try {
    const props: Pet = request.body
    const tutorId = Number(request.params.tutorId)
    const newPet = await createPetServices(props, tutorId);
    response.status(200).json(newPet);
  } catch (error: any) {
    response.status(400).json((error as Error).message);
  }
};
