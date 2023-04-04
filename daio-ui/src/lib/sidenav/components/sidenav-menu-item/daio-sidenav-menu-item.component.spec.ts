import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DaioSidenavMenuItemComponent } from "./daio-sidenav-menu-item.component";
import { DaioSidenavService } from "../../services/daio-sidenav.service";
import { DaioMockSidenav } from './testing/daio-mock-sidenav';
import { DaioIconComponent } from "daio-ui/src/lib/icons";
import { IDaioMenuItem } from "../../interfaces/daio-menu-item.interface";
import { By } from "@angular/platform-browser";

describe('DaioSidenavMenuItem', () => {
    let fixture: ComponentFixture<DaioSidenavMenuItemComponent>;
    let service: DaioSidenavService;

    const testTitle = 'test-title';
    const testIcon = 'test-icon';

    const item: IDaioMenuItem = {
        title: testTitle,
        icon: testIcon
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                DaioSidenavMenuItemComponent,
                DaioIconComponent
            ],
            providers: [
                {
                    provide: DaioSidenavService,
                    useValue: DaioMockSidenav
                }
            ]
        });

        fixture = TestBed.createComponent(DaioSidenavMenuItemComponent);
        service = TestBed.inject(DaioSidenavService);
        fixture.componentRef.setInput('item', item);
        fixture.detectChanges();
    });

    it('defines the element', () => {
        expect(fixture.debugElement).toBeDefined();
    });

    it('sets the correct class', () => {
        expect('daio-sidenav-menu-item' in fixture.debugElement.classes).toBeTruthy();
    });

    it('initially has no --active modifier if the menu is not expanded', () => {
        expect('daio-sidenav-menu-item--active' in fixture.debugElement.classes).toBeFalsy();
    });

    it('has the right --active class if the menu is expanded and item is active', () => {
        service.setActiveItem(item);
        service.setIsExpanded(true);
        fixture.detectChanges();

        expect('daio-sidenav-menu-item--active' in fixture.debugElement.classes).toBeTruthy();

        service.setIsExpanded(false);
        fixture.detectChanges();
        expect('daio-sidenav-menu-item--active' in fixture.debugElement.classes).toBeFalsy();
    });

    it('check if --active class sets when item is clicked', () => {
        expect('daio-sidenav-menu-item--active' in fixture.debugElement.classes).toBeFalsy();

        fixture.debugElement.query(By.css('.daio-sidenav-menu-item__container')).triggerEventHandler('click');
        fixture.detectChanges();
        expect('daio-sidenav-menu-item--active' in fixture.debugElement.classes).toBeTruthy();
    });
});