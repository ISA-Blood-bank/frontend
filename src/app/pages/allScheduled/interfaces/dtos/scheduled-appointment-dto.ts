export interface ScheduledAppointmentDto {
    id: number;
    appointmentId: number;
    registredUserId: number;
    passed: boolean;
    canceled: boolean;
}
