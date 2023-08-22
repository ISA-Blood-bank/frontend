import { BloodType } from "./blood-type";

export interface AdditionalInfo {
    id: number;
    questionaireId: number;
    bloodType: BloodType;
    medicalStaffId: number;
    bakarSulfat: boolean;
    normalLevel: boolean;
    highLevel: boolean;
    hemoglobinometar: string;
    value: string;
    lungs: boolean;
    heart: boolean;
    tA: string;
    tT: string;
    tV: string;
    bagType: string;
    reasonForRejection: string;
    reasonForAbort: string;
    accepted: boolean;
    scheduledAppointmentId: number;
}
