import { MedicalStaff } from "src/app/pages/blood-center-register/interface/MedicalStaff";
import { BloodCenter } from "src/app/pages/home-page/interfaces/BloodCenter";

export interface Appointment {
    id: number;
    start: Date;
    duration: number;
    available: boolean;
    bloodCenter: BloodCenter;
    medicalStaff: MedicalStaff;
}
