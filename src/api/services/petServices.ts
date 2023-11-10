import { Pet } from "../models/pet";
import { PetRepository } from "../repositories/petRepository";

export const createPetServices = async (props: Pet, tutorId: number) => {
    const petRepository = new PetRepository();
    const data = await petRepository.create(props, tutorId);
    return data;
}
