import { Address } from './Address';
import { Category } from './enums/Category';
import { Gender } from './enums/Gender';
export interface RegistredUser{
    id: number; 
    name: string;
    surname: string;
    jmbg: string;
    gender: number;
    email: string;
    password: string;
    address: Address;
    occupation: string;
    jobOrSchoolInfo: string;
    points: number;
    category: number;
    penalties: number;
    phone: string;
    isPasswordChanged : boolean;

}