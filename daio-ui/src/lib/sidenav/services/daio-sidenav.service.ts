import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IDaioMenuItem } from "../interfaces/daio-menu-item.interface";

@Injectable()
export class DaioSidenavService {
    public isExpanded$: Observable<boolean>;

    private isExpanded: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private activeItem: BehaviorSubject<IDaioMenuItem | null> = new BehaviorSubject<IDaioMenuItem | null>(null); 

    constructor() {
        this.isExpanded$ = this.isExpanded.asObservable();
    }

    public setIsExpanded(value: boolean): void {
        this.isExpanded.next(value);
    }

    public setActiveItem(item: IDaioMenuItem | null) {
        this.activeItem.next(item);
    }

    get activeItem$(): Observable<IDaioMenuItem | null> {
        return this.activeItem;
    }
}