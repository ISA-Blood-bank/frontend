import { BloodCenter } from "src/app/pages/home-page/interfaces/BloodCenter";
import { RegistredUserDto } from "src/app/pages/home-page/interfaces/dtos/RegistredUserDto";

export interface RetAppointment {
    id:number,
    start:Date,
    duration:number,
    available:boolean,
    bloodCenter: BloodCenter
}
