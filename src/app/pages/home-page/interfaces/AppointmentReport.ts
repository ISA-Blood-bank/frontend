import { ScheduledAppointment } from './ScheduledAppointment';

export interface AppointmentReport{
    id: number;
    appointment: ScheduledAppointment;
    content: string;
    canGiveBlood: boolean;
}