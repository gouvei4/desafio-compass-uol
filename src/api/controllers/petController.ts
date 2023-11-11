import { Request, Response } from "express";
import { createPetServices, deletePetServices, updatePetServices } from "../services/petServices";
import { Pet } from "../models/pet";

export const createPet = async (request: Request, response: Response) => {
  try {
    const props: Pet = request.body;
    const tutorId = Number(request.params.tutorId);
    const newPet = await createPetServices(props, tutorId);
    response.status(200).json(newPet);
  } catch (error: any) {
    response.status(400).json((error as Error).message);
  }
};

export const updatePet = async (request: Request, response: Response) => {
  try {
    const tutorId = Number(request.params.tutorId);
    const petId = Number(request.params.petId);
    const updatePetProps: Partial<Pet> = request.body;
    const update = await updatePetServices(tutorId, petId, updatePetProps);
    response.status(200).json(update);
  } catch (error: any) {
    response.status(400).json((error as Error).message)
  }

};
export const deletePet = async (request: Request, response: Response) => {
  try {
    const tutorId = Number(request.params.tutorId);
    const petId = Number(request.params.petId);
    const petDelete = await deletePetServices(tutorId, petId)
    response.status(200).json({ message: petDelete})
  } catch (error: any) {
    response.status(404).json((error as Error).message)
  }
}
