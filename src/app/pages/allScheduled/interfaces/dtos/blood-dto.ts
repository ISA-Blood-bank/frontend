import { BloodType } from "./blood-type";

export interface BloodDto {
    id: number;
    bloodType: BloodType;
    quantity: number;
    bloodCenterId: number;
}
