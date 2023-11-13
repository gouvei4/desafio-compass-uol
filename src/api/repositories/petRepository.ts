import { Tutors } from "../db/data";
import { Pet } from "../models/pet";
import { Tutor } from "../models/tutor";

const ERROR_TUTOR_NOT_FOUND = "The tutor was not found!";
const ERROR_TUTOR_NOT_PET = "The tutor does not have registered pets!";
const ERROR_PET_NOT_FOUND = "Pet not found at Tutor";

export class PetRepository {
  // POST
  async create(props: Pet, tutorId: number) {
    const tutorIndex = Tutors.findIndex((tutor) => tutor.id === tutorId);
    if (tutorIndex !== -1) {
        const existingPetIndex = (Tutors[tutorIndex].pets as Pet[])?.findIndex((pet) => pet.id === props.id);
        if (existingPetIndex === -1) {
            Tutors[tutorIndex].pets?.push(props);
            return "Pet added successfully!";
        } else {
            return "Pet with this ID already exists for the tutor.";
        }
    }
    return ERROR_TUTOR_NOT_FOUND;
}


  // PUT
  async update(tutorId: number, petId: number, props: Partial<Pet>) {
    const tutor = Tutors.find((tutor: Tutor) => tutor.id === tutorId);

    if (!tutor) {
      return ERROR_TUTOR_NOT_FOUND;
    }

    const petIndex = tutor.pets?.findIndex((pet) => pet.id === petId);
    if (petIndex !== undefined && petIndex !== -1 && tutor.pets) {
      tutor.pets[petIndex] = { ...tutor.pets[petIndex], ...props };
      return "Pet updated successfully!";
    }

    return "Pet not found with the indicated Tutor!";
  }

  // DELETE
  async delete(tutorId: number, petId: number): Promise<string> {
    try {
      const tutorIndex = Tutors.findIndex(
        (tutor: Tutor) => tutor.id === tutorId,
      );

      if (tutorIndex === -1) {
        return ERROR_TUTOR_NOT_FOUND;
      }

      const tutor = Tutors[tutorIndex];

      if (!tutor.pets) {
        return ERROR_TUTOR_NOT_PET;
      }

      const petIndex = tutor.pets.findIndex((pet) => pet.id === petId);

      if (petIndex === -1) {
        return ERROR_PET_NOT_FOUND;
      }

      tutor.pets.splice(petIndex, 1);
      return "Pet deleted successfully!";
    } catch (error: any) {
      throw new Error(`Error deleting pet: ${error.message}`);
    }
  }
}
