import { Pet } from "./pet";

export interface Tutor {
    id: number;
    name: string;
    phone: number;
    email: string;
    date_of_birth:Date;
    zip_code: number;
    pets: Pet[];
}