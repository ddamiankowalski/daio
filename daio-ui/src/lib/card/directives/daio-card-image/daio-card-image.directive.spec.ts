import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DaioCardImageDirective } from "./daio-card-image.directive";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HostComponent, HostRightComponent } from './helpers/daio-card-host'; 

describe('DaioCardImageDirective', () => {
    let fixture: ComponentFixture<HostComponent>;
    let rightFixture: ComponentFixture<HostRightComponent>;
    
    let cardEl: DebugElement;
    let rightCardEl: DebugElement;
    
    let directive: DaioCardImageDirective;
    let rightDirective: DaioCardImageDirective;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                DaioCardImageDirective
            ]
        });

        fixture = TestBed.createComponent(HostComponent);
        rightFixture = TestBed.createComponent(HostRightComponent);

        cardEl = fixture.debugElement.query(By.directive(DaioCardImageDirective));
        rightCardEl = rightFixture.debugElement.query(By.directive(DaioCardImageDirective));
        
        directive = cardEl.injector.get(DaioCardImageDirective);
        rightDirective = rightCardEl.injector.get(DaioCardImageDirective);

        fixture.detectChanges();
        rightFixture.detectChanges();
    });

    it('correctly initializes the class', () => {
        expect('daio-card-image' in cardEl.classes).toBeTruthy();
        expect('daio-card' in cardEl.classes).toBeTruthy();
    });

    it('sets the --left modifier if no input #imagePosition was specified', () =>{
        expect(directive.imagePosition).toBe('left');
        expect('daio-card-image--left' in cardEl.classes).toBeTruthy();
    });

    it('sets the --right modifier if the #imagePosition was specified', () => {
        expect(rightDirective.imagePosition).toBe('right');
        expect('daio-card-image--right' in rightCardEl.classes).toBeTruthy();
    });

    it('host #DaioCardComponent should be defined', () => {
        expect(directive['card']).toBeDefined();
    });

    it('sets #DaioCardComponent the correct card type and position when default', () => {
        expect(directive['card']['position']).toBe('left');
        expect(directive['card']['type']).toBe('image');
    });

    it('sets #DaioCardComponent the right position when specified', () => {
        expect(rightDirective['card']['position']).toBe('right');
        expect(rightDirective['card']['type']).toBe('image');
    });
});