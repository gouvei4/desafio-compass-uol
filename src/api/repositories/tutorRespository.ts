import { Tutors } from "../db/data";
import { Tutor } from "../models/tutor";

const ERROR_TUTOR_NOT_FOUND = "The tutor was not found!";

export class TutorRepository {
  async all() {
    return Tutors;
  }
  async create(props: Tutor) {
    const tutors = await this.all();
    const isExistTutor = tutors?.findIndex((tutor) => (tutor.id === props.id));

    if (isExistTutor === -1) {
      Tutors.push(props);
      return "Tutor created successfully!";
    } else if (isExistTutor !== -1)
    return "Tutor already exists!";
  }

  async update(tutorId: number, props: Partial<Tutor>) {
    const tutorIndex = Tutors.findIndex((tutor: Tutor) => tutor.id === tutorId);
    if (tutorIndex !== -1) {
      Tutors[tutorIndex] = { ...Tutors[tutorIndex], ...props };
      return "Updated tutor";
    } else {
      return ERROR_TUTOR_NOT_FOUND;
    }
  }


  async delete(tutorId: number) {
    const tutorIndex = Tutors.findIndex((tutor: Tutor) => tutor.id === tutorId);
    if (tutorIndex !== -1) {
      Tutors.splice(tutorIndex, 1);
      return "Tutor was successfully deleted!";
    } else {
      return ERROR_TUTOR_NOT_FOUND;
    }
  }
}
