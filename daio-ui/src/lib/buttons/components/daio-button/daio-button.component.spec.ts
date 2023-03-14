import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaioButtonComponent } from './daio-button.component';

describe('DaioButtonComponent', () => {
    let fixture: ComponentFixture<DaioButtonComponent>;
    let component: DaioButtonComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DaioButtonComponent]
        });

        fixture = TestBed.createComponent(DaioButtonComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('successfully initializes', () => {
        expect(component).toBeDefined();
    });
});