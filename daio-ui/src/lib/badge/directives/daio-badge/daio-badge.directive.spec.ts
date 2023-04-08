import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DaioBadgeDirective } from "./daio-badge.directive";
import { DaioBadgeDirectiveHostComponent } from './helpers/daio-badge-host.component';
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

describe('DaioBadgeDirective', () => {
    let fixture: ComponentFixture<DaioBadgeDirectiveHostComponent>;
    let badgeEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                DaioBadgeDirective,
                DaioBadgeDirectiveHostComponent
            ]
        });

        fixture = TestBed.createComponent(DaioBadgeDirectiveHostComponent);
        fixture.detectChanges();
        badgeEl = fixture.debugElement.query(By.css('.daio-badge'));
    });

    it('defines component fixture', () => {
        expect(fixture).toBeDefined();
        expect(badgeEl).toBeDefined();
    });

    it('displays the correct value inside the badge', () => {
        expect((badgeEl.nativeElement as HTMLElement).textContent).toEqual('1');
    });

    it('displays the default color if the additional class was not provided', () => {
        const primaryEl = fixture.debugElement.query(By.css('.daio-badge--primary'));
        expect(primaryEl).toBeTruthy();
    });
});