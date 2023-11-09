import { Tutors } from "../db/data";

export class TutorRepository {
    async all () {
        return Tutors
    }
}