import { TutorRepository } from "../repositories/tutorRespository"

export const findAllTutors = async () => {
    const tutorRepository = new TutorRepository()
    const data = await tutorRepository.all()
    return data
}