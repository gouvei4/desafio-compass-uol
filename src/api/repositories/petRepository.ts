import { Tutors } from "../db/data";
import { Pet } from "../models/pet";
import { Tutor } from "../models/tutor";

export class PetRepository {
  async create(props: Pet, tutorId: number) {
    const tutor = await Tutors.find((tutor) => tutor.id === tutorId);
    if (tutor) {
      const tutorIndex = Tutors.findIndex((tutor) => tutor.id === tutorId);
      Tutors[tutorIndex].pets?.push(props);
      return "Pet adicionado!";
    }
    return "Tutor não encontrado";
  }

  async update(tutorId: number, petId: number, props: Partial<Pet>) {
    const tutor = Tutors.find((tutor: Tutor) => tutor.id === tutorId);

    if (tutor) {
      const petIndex = tutor.pets?.findIndex((pet) => pet.id === petId);

      if (petIndex !== undefined && petIndex !== -1 && tutor.pets) {
        tutor.pets[petIndex] = {...tutor.pets[petIndex], ...props};
        return "Pet atualizado";
      } else {
        return "Pet não encontrado no Tutor"
      }
    } else {
      return "Tutor não encontrado!"
    }

  }
}
