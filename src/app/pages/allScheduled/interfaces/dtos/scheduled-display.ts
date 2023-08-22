export interface ScheduledDisplay {
    id:number;
    name: string;
    surname: string;
    email: string;
    start: Date;
    duration: number;
    passed: boolean;
    canceled: boolean;
    userId: number;
}
