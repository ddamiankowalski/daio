import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaioRendererService } from '../../../services/daio-renderer.service';
import { DaioButtonComponent } from '../daio-button.component';

describe('DaioButtonDirective', () => {
    let fixture: ComponentFixture<DaioButtonComponent>;

    const setComponentInput = (inputName: string, value: any): void => {
        (fixture.componentInstance as any)[inputName] = value;
        fixture.detectChanges();
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                DaioButtonComponent
            ],
            providers: [
                DaioRendererService
            ]
        });
        fixture = TestBed.createComponent(DaioButtonComponent);
        fixture.detectChanges();
    });

    it('successfully initializes', () => {
        expect(fixture.debugElement.nativeElement).toBeDefined();
    });

    it('component applies the daio-button class to itself', () => {
        expect(fixture.debugElement.classes['daio-button']).toBe(true);
    });

    it('the disabled class is applied to the button component', () => {
        setComponentInput('disabled', true)
        expect(fixture.debugElement.classes['daio-button--disabled']).toBe(true);

        setComponentInput('disabled', false)
        expect(fixture.debugElement.classes['daio-button--disabled']).toBe(undefined);
    });

    it('sets the loading class on the component instance', () => {
        setComponentInput('loading', true)
        expect(fixture.debugElement.classes['daio-button--loading']).toBe(true);

        setComponentInput('loading', false)
        expect(fixture.debugElement.classes['daio-button--loading']).toBe(undefined);
    });
});