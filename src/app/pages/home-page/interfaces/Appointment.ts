import { RegistredUser } from './RegistredUser';
import { BloodCenter } from "./BloodCenter";

export interface Appointment{
    id: number;
    start: Date;
    duration: number;
    available: boolean;
    bloodCenter: BloodCenter;
    medicalStaff: RegistredUser;
}