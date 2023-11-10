import { Tutors } from "../db/data";
import { Pet } from "../models/pet";

export class petRepository {
  create(props: Pet, tutorId: number) {
    const tutor = Tutors.find((tutor) => tutor.id === tutorId);
    if (tutor) {
      const tutorIndex = Tutors.findIndex((tutor) => tutor.id === tutorId);
      Tutors[tutorIndex].pets?.push(props);
      return "Pet adicionado!";
    }
    return "Tutor não encontrado";
  }
}
