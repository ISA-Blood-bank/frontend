import { Category } from "../enums/Category";
import { Gender } from "../enums/Gender";

export interface RegistredUserViewDto {
    id: number;
    name: string;
    surname: string;
    jmbg: string;
    gender: Gender;
    email: string;
    occupation: string;
    jobOrSchoolInfo: string;
    points: number;
    category: Category;
    penalties: number;
    weight:number;
    phone: string;
}
