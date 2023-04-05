import { TestBed } from "@angular/core/testing";
import { DaioSidenavService } from "./daio-sidenav.service"
import { IDaioMenuItem } from "../interfaces/daio-menu-item.interface";

describe('DaioSidenavService', () => {
    let service: DaioSidenavService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DaioSidenavService]
        });
        service = TestBed.inject(DaioSidenavService);
    });

    it('is correctly initialized', () => {
        expect(service.isExpanded$).toBeDefined();
        expect(service.activeItem$).toBeDefined();
    });

    it('checks if #isExpanded$ was called when setting it with #setIsExpanded', () => {
        const spy = jest.spyOn(service['isExpanded'], 'next');
        expect(spy).not.toHaveBeenCalled();

        service.setIsExpanded(true);
        expect(spy).toHaveBeenCalledWith(true);

        service.setIsExpanded(false);
        expect(spy).toHaveBeenCalledWith(false);
    });

    it('#activeItem$ was called when calling the #setActive method', () => {
        const spy = jest.spyOn(service['activeItem'], 'next');
        expect(spy).not.toHaveBeenCalled();

        service.setActiveItem({} as IDaioMenuItem);
        expect(spy).toHaveBeenCalledWith({});
    });
})