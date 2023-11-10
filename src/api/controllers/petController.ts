import { Request, Response, response } from "express";
import { createPetServices } from "../services/petServices";

export const createPet = async (request: Request, response: Response) => {
  try {
    const {props, tutorId} = request.body
    const newPet = await createPetServices(props, tutorId);
    response.status(200).json(newPet);
  } catch (error: any) {
    response.status(400).json((error as Error).message);
  }
};
