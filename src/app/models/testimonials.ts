import { DatePipe } from "@angular/common";
import { Timestamp } from "@angular/fire/firestore";

export interface testimonial{
    image:string;
    content:string;
    name:string;
    date:Timestamp;
}