import { Gender } from "../enums/Gender";

export interface MedicalStaffDto {
    id: number; 
    name: string;
    surname: string;
    jmbg: string;
    gender: Gender;
    email: string;
    addressId: number;
    bloodCenterId : number;
}

