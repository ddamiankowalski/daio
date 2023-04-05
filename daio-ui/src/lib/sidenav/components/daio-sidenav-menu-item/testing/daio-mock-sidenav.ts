import { IDaioMenuItem } from "../../../interfaces/daio-menu-item.interface";
import { DaioSidenavService } from "../../../services/daio-sidenav.service";
import { BehaviorSubject } from "rxjs";

export const DaioMockSidenav: Partial<DaioSidenavService> = {
    isExpanded$: new BehaviorSubject<boolean>(false),
    activeItem$: new BehaviorSubject<IDaioMenuItem | null>(null),

    setIsExpanded: function(value: boolean): void {
        (this.isExpanded$ as BehaviorSubject<boolean>).next(value);
    },

    setActiveItem: function(item: IDaioMenuItem): void {
        (this.activeItem$ as BehaviorSubject<IDaioMenuItem | null>).next(item);
    } 
};