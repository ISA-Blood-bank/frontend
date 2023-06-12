import { UserAddress } from "./user-address";

export interface LoggedUserDto {
    id: number;
    name: string;
    surname: string;
    jmbg: string;
    gender: number;
    email: string;
    password: string;
    address: UserAddress;
    occupation: string;
    jobOrSchoolInfo: string;
    points: number;
    category: number;
    penalties: number;
    version: number;
}
