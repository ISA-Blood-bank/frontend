export interface AppointmentDto {

    id: number;
    start: Date;
    duration: number;
    available: boolean;
    bloodCenterId: number;
    medicalStaff: number;
}
