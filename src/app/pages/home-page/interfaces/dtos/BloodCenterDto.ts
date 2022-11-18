import { Address } from "../Address";

export interface BloodCenterDto {
    id: number; 
    name: string;
    address: Address;
    description: string;
    averageScore: number;
}