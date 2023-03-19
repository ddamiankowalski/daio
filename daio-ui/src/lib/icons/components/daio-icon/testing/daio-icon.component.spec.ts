import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DaioIconComponent } from '../daio-icon.component';

describe('DaioIconComponent', () => {
    let fixture: ComponentFixture<DaioIconComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DaioIconComponent]
        })

        fixture = TestBed.createComponent(DaioIconComponent);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should initialize with the correct class', () => {
        fixture.detectChanges();
        expect(fixture.debugElement.classes['daio-icon']).toBe(true);
    });

    it('sets no class when no input was provided', () => {
        fixture.detectChanges();
        const span = fixture.debugElement.query(By.css('span'));

        expect(Object.keys(span.classes).length).toEqual(1);
        expect(span.classes['fa-solid']).toBeTruthy();
    });

    it('sets the correct classes based on the input values', () => {
        fixture.componentRef.setInput('iconName', 'user');
        fixture.detectChanges();

        const span = fixture.debugElement.query(By.css('span'));
        expect(span.classes['fa-user']).toBeTruthy();
    });

    it('sets the right icontype class and leaves fa-solid as default', () => {
        fixture.detectChanges();
        const span = fixture.debugElement.query(By.css('span'));

        expect(span.classes['fa-solid']).toBeTruthy();

        fixture.componentRef.setInput('iconType', 'test');
        fixture.detectChanges();

        expect(span.classes['fa-test']).toBeTruthy();
        expect(span.classes['fa-solid']).toBeFalsy();
    });
});