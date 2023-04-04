import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DaioSidenavTitleComponent } from "./daio-sidenav-title.component";
import { By } from "@angular/platform-browser";
import { DaioSidenavService } from "../../services/daio-sidenav.service";
import { DaioSidenavMock } from './testing/daio-sidenav-mock';

describe('DaioSidenavTitleComponent', () => {
    let fixture: ComponentFixture<DaioSidenavTitleComponent>;
    let service: DaioSidenavService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DaioSidenavTitleComponent],
            providers: [
                {
                    provide: DaioSidenavService,
                    useValue: DaioSidenavMock
                }
            ]
        });

        fixture = TestBed.createComponent(DaioSidenavTitleComponent);
        service = TestBed.inject(DaioSidenavService);
    });

    it('sets the appropriate class', () => {
        fixture.detectChanges();

        expect('daio-sidenav-title' in fixture.debugElement.classes).toBeTruthy();
    });

    it('shows the correct title', () => {
        fixture.detectChanges();
        expect((fixture.debugElement.query(By.css('.daio-sidenav-title__container__text')).nativeElement as HTMLElement).textContent).toEqual("  ");

        fixture.componentRef.setInput('title', 'testvalue');
        fixture.detectChanges();
        expect((fixture.debugElement.query(By.css('.daio-sidenav-title__container__text')).nativeElement as HTMLElement).textContent).toEqual(' testvalue ');
    });

    it('sets the correct --expanded class', () => {
        fixture.detectChanges();

        expect('daio-sidenav-title--expanded' in fixture.debugElement.classes).toBeFalsy();

        service.setIsExpanded(true);
        fixture.detectChanges();
        expect('daio-sidenav-title--expanded' in fixture.debugElement.classes).toBeTruthy();
    
        service.setIsExpanded(false);
        fixture.detectChanges();
        expect('daio-sidenav-title--expanded' in fixture.debugElement.classes).toBeFalsy();
    });
});