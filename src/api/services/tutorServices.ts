import { TutorRepository } from "../repositories/tutorRespository";
import { Tutor } from "../models/tutor";

export const findAllTutors = async () => {
  const tutorRepository = new TutorRepository();
  const data = await tutorRepository.all();
  return data;
};

export const createTutorService = async (props: Tutor) => {
  const tutorRepository = new TutorRepository();
  const data = await tutorRepository.create(props);
  return data
}

export const updateTutorService = async (tutorId: number, props: Partial<Tutor>) => {
  const tutorRepository = new TutorRepository();
  const data = await tutorRepository.update(tutorId, props);
  return data
}

export const deleteTutorService = async (tutorId: number) => {
  const tutorRepository = new TutorRepository();
  const data = await tutorRepository.delete(tutorId);
  return data
}
