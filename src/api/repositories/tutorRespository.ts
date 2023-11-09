import { Tutors } from "../db/data";
import { Tutor } from "../models/tutor";

export class TutorRepository {
  async all() {
    return Tutors;
  }
  async create(props: Tutor) {
    const tutors = await this.all();
    const isExistTutor = tutors?.find((tutor) => {
      tutor.id === props.id;
    });

    if (isExistTutor) {
      return "Tutor já existe!";
    }

    return Tutors.push(props);
  }
  async update(tutorId: number, props: Partial<Tutor>) {
    console.log(tutorId, props);
    const tutorIndex = Tutors.findIndex((tutor: Tutor) => tutor.id === tutorId);
    if (Tutors[tutorIndex]) {
      Tutors[tutorIndex] = { ...Tutors[tutorIndex], ...props };
      return "Tutor atualizado";
    } else {
      return "Tutor não encontrado";
    }
  }
}
