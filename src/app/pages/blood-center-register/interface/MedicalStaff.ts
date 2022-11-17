import { Address } from "../../home-page/interfaces/Address";
import { BloodCenter } from "../../home-page/interfaces/BloodCenter";

export interface MedicalStaff{
    id: number; 
    name: string;
    surname: string;
    jmbg: string;
    gender: number;
    email: string;
    address: Address;
    bloodCenter : BloodCenter;
}