import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DaioMenuComponent } from "./daio-menu.component";
import { DaioButtonIconComponent } from "../../../buttons/components/daio-button-icon/daio-button-icon.component";
import { DaioButtonMenuComponent } from "../../../buttons/components/daio-button-menu/daio-button-menu.component";
import { By } from "@angular/platform-browser";
import { MenuHostComponent } from './helpers/menu-host.component';
import { DaioOverlayComponent } from "../../../overlay/components/daio-overlay.component";
import { DaioOverlayService } from "../../../overlay/services/daio-overlay.service";
import { DebugElement } from "@angular/core";

const getOverlayElements = (overlayFixture: ComponentFixture<DaioOverlayComponent>): number => {
    return overlayFixture.debugElement.query(By.css('.daio-overlay__outlet')).children.length;
}

const getFirstOverlayElement = (overlayFixture: ComponentFixture<DaioOverlayComponent>): DebugElement => {
    return overlayFixture.debugElement.query(By.css('.daio-overlay__outlet'));
}

describe('DaioMenuComponent', () => {
    let fixture: ComponentFixture<MenuHostComponent>;
    let overlayFixture: ComponentFixture<DaioOverlayComponent>;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                DaioMenuComponent,
                DaioButtonIconComponent,
                DaioMenuComponent,
                DaioButtonMenuComponent,
                MenuHostComponent,
                DaioOverlayComponent
            ],
            providers: [DaioOverlayService]
        });

        overlayFixture = TestBed.createComponent(DaioOverlayComponent);
        fixture = TestBed.createComponent(MenuHostComponent);
        fixture.detectChanges();
        overlayFixture.detectChanges();
    });

    it('initially the #daioMenu is not visible', () => {
        expect(getOverlayElements(overlayFixture)).toEqual(0);
    });

    it('calls #showMenu when #toggleMenu is called', () => {
        const showMenuSpy = jest.spyOn(fixture.componentInstance.menu as any, 'showMenu');
        fixture.componentInstance.menu.toggleMenu(new MouseEvent('click'));
        expect(showMenuSpy).toHaveBeenCalled();
    });

    it('no elements inside overlay should be displayed if #showMenu was not called', () => {
        const showMenuSpy = jest.spyOn(fixture.componentInstance.menu as any, 'showMenu');
        expect(showMenuSpy).not.toHaveBeenCalled();
        expect(getOverlayElements(overlayFixture)).toEqual(0);
    });

    it('creates a menu inside an overlay when #toggleMenu was called', () => {
        fixture.componentInstance.menu.toggleMenu(new MouseEvent('click'));
        fixture.detectChanges();
        expect(getOverlayElements(overlayFixture)).toEqual(1);
    });

    it('starts the hiding animation after the #toggleMenu was clicked again', () => {
        fixture.componentInstance.menu.toggleMenu(new MouseEvent('click'));
        fixture.detectChanges();
        
        let menuEl = getFirstOverlayElement(overlayFixture).children[0].nativeElement as HTMLElement;
        expect(getOverlayElements(overlayFixture)).toEqual(1);
        expect(menuEl.style.animation).toBeFalsy();
        fixture.componentInstance.menu.toggleMenu(new MouseEvent('click'));
        fixture.detectChanges();

        menuEl = getFirstOverlayElement(overlayFixture).children[0].nativeElement as HTMLElement;
        expect(menuEl.style.animation).toEqual('fadeOut .1s');
    });
});