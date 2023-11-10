import { Pet } from "../models/pet";
import { PetRepository } from "../repositories/petRepository";

export const createPetServices = async (props: Pet, tutorId: number) => {
    const petRepository = new PetRepository();
    const data = await petRepository.create(props, tutorId);
    return data;
}

export const updatePetServices = async (tutorId: number, petId: number, props: Partial<Pet>) => {
    const petRepository = new PetRepository();
    const data = await petRepository.update(tutorId, petId, props)
    return data;
}