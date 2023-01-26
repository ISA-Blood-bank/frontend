import { Address } from "../Address";

export interface RegistredUserDto{
    id: number; 
    name: string;
    surname: string;
    jmbg: string;
    gender: number;
    email: string;
    password1: string;
    password2: string;
    address: Address;
    occupation: string;
    jobOrSchoolInfo: string;
    points: number;
    category: number;
    penalties: number;
    phone: string;
}