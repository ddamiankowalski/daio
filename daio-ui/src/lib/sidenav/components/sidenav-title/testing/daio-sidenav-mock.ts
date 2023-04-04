import { BehaviorSubject } from "rxjs";
import { DaioSidenavService } from "../../../services/daio-sidenav.service";

export const DaioSidenavMock: Partial<DaioSidenavService> = {
    isExpanded$: new BehaviorSubject<boolean>(false),

    setIsExpanded: function(value: boolean) {
        (this.isExpanded$ as BehaviorSubject<boolean>).next(value);
    }
};