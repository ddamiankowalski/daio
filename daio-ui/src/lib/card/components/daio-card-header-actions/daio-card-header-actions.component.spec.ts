import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DaioCardHeaderActionsComponent } from "./daio-card-header-actions.component"
import { By } from "@angular/platform-browser";
import { DaioIconComponent } from "../../../icons";

describe('DaioCardHeaderActionsComponent', () => {
    let fixture: ComponentFixture<DaioCardHeaderActionsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DaioCardHeaderActionsComponent]
        });

        fixture = TestBed.createComponent(DaioCardHeaderActionsComponent);
        fixture.detectChanges();
    });

    it('sets the correct class', () => {
        expect('daio-card-header-actions' in fixture.debugElement.classes);
    });

    it('calls the #iconClicked eventemitter on daio-icon click', () => {
        const spy = jest.spyOn(fixture.componentInstance.iconClicked, 'emit');
        expect(spy).not.toBeCalled();

        const iconEl = fixture.debugElement.query(By.directive(DaioIconComponent));
        iconEl.triggerEventHandler('click');

        expect(spy).toBeCalled();
    });
})