import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ActiavationService {
    //activateEmitter = new EventEmitter<boolean>();
    activateEmitter = new Subject<boolean>();
}