import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DaioBadgeDirective } from "./daio-badge.directive";
import { DaioBadgeDirectiveHostComponent } from './helpers/daio-badge-host.component';

describe('DaioBadgeDirective', () => {
    let fixture: ComponentFixture<DaioBadgeDirectiveHostComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                DaioBadgeDirective,
                DaioBadgeDirectiveHostComponent
            ]
        });

        fixture = TestBed.createComponent(DaioBadgeDirectiveHostComponent);
    });

    it('defines component fixture', () => {
        expect(fixture).toBeDefined();
    });
});