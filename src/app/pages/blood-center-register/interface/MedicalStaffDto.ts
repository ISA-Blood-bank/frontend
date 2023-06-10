import { Address } from "../../home-page/interfaces/Address";
import { BloodCenter } from "../../home-page/interfaces/BloodCenter";

export interface MedicalStaffDto{
    id: number; 
    name: string;
    surname: string;
    jmbg: string;
    gender: number;
    email: string;
    password1: string;
    password2 : string;
    address: Address;
    bloodCenter : BloodCenter;

}