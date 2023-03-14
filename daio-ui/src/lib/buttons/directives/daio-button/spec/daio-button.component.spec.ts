import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaioButtonDirective } from '../daio-button.directive';
import { ParentMockComponent, ParentMockWrongComponent } from './helpers/parent-mock.component';

describe('DaioButtonDirective', () => {
    let fixture: ComponentFixture<ParentMockComponent>;
    let buttonElement: HTMLButtonElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DaioButtonDirective, ParentMockComponent, ParentMockWrongComponent]
        });
        fixture = TestBed.createComponent(ParentMockComponent);
        buttonElement = fixture.nativeElement.querySelector('button');
        fixture.detectChanges();
    });

    it('successfully initializes', () => {
        expect(buttonElement).toBeDefined();
    });

    it('throws an error if trying to add directive to anything else than a button', () => {
        expect(() => TestBed.createComponent(ParentMockWrongComponent)).toThrowError();
    });

    it('directive applies the daio-button class', () => {
        expect(buttonElement.classList.contains('daio-button')).toBe(true);
    });

    it('checks if a button is disabled correctly', () => {
        fixture.componentInstance.directive.disabled = true;
        expect(buttonElement.classList.contains('daio-button--disabled')).toBe(true);
    });
});