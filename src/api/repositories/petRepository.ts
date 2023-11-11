import { Tutors } from "../db/data";
import { Pet } from "../models/pet";
import { Tutor } from "../models/tutor";

const ERROR_TUTOR_NOT_FOUND = "O tutor não foi encontrado!";
const ERROR_TUTOR_NOT_PET = "O tutor não possui pets cadastrados!";
const ERROR_PET_NOT_FOUND = "Pet não encontrado no Tutor";

export class PetRepository {
  // POST
  async create(props: Pet, tutorId: number) {
    const tutor = await Tutors.findIndex((tutor) => tutor.id === tutorId);
    if (tutor !== -1) {
      Tutors[tutor].pets?.push(props);
      return "Pet adicionado!";
    }
    return "Tutor não encontrado";
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
      return "Pet atualizado";
    }

    return "Pet não encontrado no Tutor";
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
      return "Pet excluído com sucesso!";
    } catch (error: any) {
      throw new Error(`Erro ao excluir o pet: ${error.message}`);
    }
  }
}
