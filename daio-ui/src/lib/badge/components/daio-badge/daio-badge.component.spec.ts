import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DaioBadgeComponent } from './daio-badge.component';
import { By } from "@angular/platform-browser";

describe('DaioBadgeComponent', () => {
    let fixture: ComponentFixture<DaioBadgeComponent>;
    let valueEl: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DaioBadgeComponent]
        });
        fixture = TestBed.createComponent(DaioBadgeComponent);
        valueEl = fixture.debugElement.query(By.css('.daio-badge__value')).nativeElement;
    });

    it('adds correct class to the component', () => {
        fixture.detectChanges();

        expect('daio-badge' in fixture.debugElement.classes).toBeTruthy();
    });

    it('changes the value rendered depending on the #badgeValue', () => {
        fixture.componentInstance.setBadgeValue('valuetest');
        fixture.detectChanges();
        expect(valueEl.innerHTML).toEqual('valuetest');
    });
});