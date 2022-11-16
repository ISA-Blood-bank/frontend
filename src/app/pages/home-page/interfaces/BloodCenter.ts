import { Address } from './Address';
export interface BloodCenter{
    id: number;
    name: string;
    address: Address;
    description: string;
    averageScore: number;
}