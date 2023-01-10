import { Appointment } from './Appointment';
import { RegistredUser } from './RegistredUser';

export interface ScheduledAppointment{
    id: number;
    appointment: Appointment;
    user: RegistredUser;
    passed: boolean;
    canceled: boolean;
}