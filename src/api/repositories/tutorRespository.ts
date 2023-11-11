import { Tutors } from "../db/data";
import { Tutor } from "../models/tutor";

const ERROR_TUTOR_NOT_FOUND = "O tutor não foi encontrado!";

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
      return ERROR_TUTOR_NOT_FOUND;
    }
  }
  async delete(tutorId: number) {
    const tutorIndex = Tutors.findIndex((tutor: Tutor) => tutor.id === tutorId);
    if (tutorIndex !== -1) {
      Tutors.splice(tutorIndex, 1);
      return "Tutor foi excluído com sucesso!";
    } else {
      return ERROR_TUTOR_NOT_FOUND;
    }
  }
}
