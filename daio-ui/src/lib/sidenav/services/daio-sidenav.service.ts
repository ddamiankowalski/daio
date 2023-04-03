import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class DaioSidenavService {
    private isExpanded: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public setIsExpanded(value: boolean): void {
        console.log(value);
        this.isExpanded.next(value);
    }

    get isExpanded$(): Observable<boolean> {
        return this.isExpanded.asObservable();
    }
}