import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DaioCheckboxComponent } from "./daio-checkbox.component";

describe('DaioCheckboxComponent', () => {
    let fixture: ComponentFixture<DaioCheckboxComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DaioCheckboxComponent]
        });

        fixture = TestBed.createComponent(DaioCheckboxComponent);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('sets the element id correctly', () => {
        fixture.detectChanges();

        expect(fixture.componentInstance.id).toEqual("1");
    });

    it('initializes the component and sets the class', () => {
        fixture.detectChanges();

        expect(fixture.componentInstance).toBeTruthy();
        expect(fixture.debugElement.classes['daio-checkbox']).toBeTruthy();
    });

    it('#onCheckboxClick is executed on input click', () => {
        fixture.detectChanges();
        
        const checkboxSpy = jest.spyOn(fixture.componentInstance, 'onCheckboxClick');
        const inputEl = fixture.debugElement.query(By.css('input'));
        inputEl.nativeElement.dispatchEvent(new Event('click'));

        fixture.detectChanges();
        expect(checkboxSpy).toBeCalled();
    });

    it('changes the checked to true after input click', () => {
        fixture.detectChanges();
        expect(fixture.componentInstance['checked']).toBe(false);

        const inputEl = fixture.nativeElement.querySelector('input');
        inputEl.click();
        fixture.detectChanges();
        expect(fixture.componentInstance['checked']).toBe(true);
    });
});