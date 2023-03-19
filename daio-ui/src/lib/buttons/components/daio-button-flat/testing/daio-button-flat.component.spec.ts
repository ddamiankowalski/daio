import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DaioButtonFlatComponent } from '../daio-button-flat.component';

describe('DaioButtonFlatComponent', () => {
    let fixture: ComponentFixture<DaioButtonFlatComponent>;

    const setComponentInput = (inputName: string, value: any): void => {
        (fixture.componentInstance as any)[inputName] = value;
        fixture.detectChanges();
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                DaioButtonFlatComponent
            ]
        });

        fixture = TestBed.createComponent(DaioButtonFlatComponent);
        fixture.detectChanges();
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('initializes the component with the correct class', () => {
        expect(fixture.debugElement.classes['daio-button-flat']).toBe(true);
    });

    it('the disabled class is applied to the button component', () => {
        fixture.debugElement.nativeElement.setAttribute('disabled', true);
        fixture.detectChanges();
        expect(fixture.debugElement.attributes['disabled']).toBe('true');

        fixture.debugElement.nativeElement.setAttribute('disabled', false);
        fixture.detectChanges();
        expect(fixture.debugElement.attributes['disabled']).toBe('false');
    });

    it('sets the loading class on the component instance', () => {
        setComponentInput('loading', true)
        expect(fixture.debugElement.classes['daio-button--loading']).toBe(true);

        setComponentInput('loading', false)
        expect(fixture.debugElement.classes['daio-button--loading']).toBe(undefined);
    });
});