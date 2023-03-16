import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { DaioButtonRendererService } from '../../../services/daio-button-renderer.service';
import { DaioButtonDirective } from '../daio-button.directive';
import { ParentMockComponent, ParentMockWrongComponent } from './helpers/parent-mock.component';

describe('DaioButtonDirective', () => {
    let fixture: ComponentFixture<ParentMockComponent>;
    let buttonElement: HTMLButtonElement;

    const setDirectiveInput = (inputName: string, value: any): void => {
        (fixture.componentInstance.directive as any)[inputName] = value;
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                DaioButtonDirective, 
                ParentMockComponent, 
                ParentMockWrongComponent
            ],
            providers: [
                DaioButtonRendererService
            ]
        });
        fixture = TestBed.createComponent(ParentMockComponent);
        buttonElement = fixture.nativeElement.querySelector('button');
        fixture.detectChanges();
    });

    it('successfully initializes', () => {
        expect(buttonElement).toBeDefined();
    });

    it('throws an error if trying to add directive to anything else than a button', () => {
        const fixture = TestBed.createComponent(ParentMockWrongComponent);
        expect(() => fixture.detectChanges()).toThrowError();
    });

    it('directive applies the daio-button class', () => {
        expect(buttonElement.classList.contains('daio-button')).toBe(true);
    });

    it('checks if a button is disabled correctly', () => {
        setDirectiveInput('disabled', true)
        expect(buttonElement.classList.contains('daio-button--disabled')).toBe(true);

        setDirectiveInput('disabled', false)
        expect(buttonElement.classList.contains('daio-button--disabled')).toBe(false);
    });

    it('sets the loading class if loading is specified', () => {
        setDirectiveInput('loading', true)
        expect(buttonElement.classList.contains('daio-button--loading')).toBe(true);

        setDirectiveInput('loading', false)
        expect(buttonElement.classList.contains('daio-button--loading')).toBe(false);
    });

    it('sets the correct text message inside the button', fakeAsync(() => {
        const textDiv = buttonElement.querySelector('div');
        expect(textDiv?.innerHTML).toEqual('testvalue');
    }));
});