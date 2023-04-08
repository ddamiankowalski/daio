import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DaioCardHeaderComponent } from "./daio-card-header.component";
import { Component } from "@angular/core";
import { DaioCardHeaderAvatarDirective } from "./daio-card-header.component";
import { DaioCardComponent } from "../daio-card/daio-card.component";
import { ViewChild } from "@angular/core";
import { By } from "@angular/platform-browser";
import { NgIf } from "@angular/common";
import { Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'test-card-header-host',
    template: `
        <daio-card>
            <daio-card-header daioShowAvatar>
                <div *ngIf="testMockAvatar" daioCardAvatar class="test-class"></div>
            </daio-card-header>
        </daio-card>
        `,
    imports: [
        DaioCardHeaderComponent,
        DaioCardHeaderAvatarDirective,
        DaioCardComponent,
        NgIf
    ]
})
class CardHeaderAvatarComponent {
    @ViewChild(DaioCardHeaderComponent) header!: DaioCardHeaderComponent;
    @Input() testMockAvatar = false;
}

@Component({
    standalone: true,
    selector: 'test-card-header-host',
    template: `
        <daio-card>
            <daio-card-header></daio-card-header>
        </daio-card>
        `,
    imports: [
        DaioCardHeaderComponent,
        DaioCardHeaderAvatarDirective,
        DaioCardComponent
    ]
})
class NoopCardHeaderAvatarComponent {
    @ViewChild(DaioCardHeaderComponent) header!: DaioCardHeaderComponent;
}

describe('DaioCardHeaderComponent', () => {
    let fixture: ComponentFixture<DaioCardHeaderComponent>;
    const fixtureClass = 'daio-card-header';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                DaioCardHeaderComponent,
                CardHeaderAvatarComponent,
                NoopCardHeaderAvatarComponent
            ]
        });
    
        fixture = TestBed.createComponent(DaioCardHeaderComponent);
    })

    it('sets the correct class and initializes the component', () => {
        expect(fixture).toBeDefined();
        expect(fixtureClass in fixture.debugElement.classes);
    });

    it('by default has #showAvatar set to false', () => {
        expect(fixture.componentInstance['showAvatar']).toBeFalsy();
    });

    it('#setShowAvatar sets the #showAvatar to true', () => {
        expect(fixture.componentInstance['showAvatar']).toBeFalsy();

        fixture.componentInstance.setShowAvatar();
        expect(fixture.componentInstance['showAvatar']).toBeTruthy();
    })

    describe('DaioCardHeader inside a DaioCard context', () => {
        let avatarFixture: ComponentFixture<CardHeaderAvatarComponent>
        let noopAvatarFixture: ComponentFixture<NoopCardHeaderAvatarComponent>

        beforeEach(() => {
            avatarFixture = TestBed.createComponent(CardHeaderAvatarComponent)
            noopAvatarFixture = TestBed.createComponent(NoopCardHeaderAvatarComponent);

            avatarFixture.detectChanges();
            noopAvatarFixture.detectChanges();
        });

        it('both fixtures to succesfully initialize', () => {
            expect(avatarFixture).toBeDefined();
            expect(noopAvatarFixture).toBeDefined();
        });

        it('sets the #showAvatar for #avatarFixture', () => {
            expect(avatarFixture.componentInstance.header['showAvatar']).toBeTruthy();
        });

        it('does not set the #showAvatar for #avatarFixture', () => {
            expect(noopAvatarFixture.componentInstance.header['showAvatar']).toBeFalsy();
        });

        it('displays #daio-card-header__avatar class correctly', () => {
            const avatarEl = avatarFixture.debugElement.query(By.css('.daio-card-header__avatar'));
            expect(avatarEl).toBeTruthy();
        });

        it('does not display the #daio-card-header__avatar class if not specified', () => {
            const avatarEl = noopAvatarFixture.debugElement.query(By.css('.daio-card-header__avatar'));
            expect(avatarEl).toBeFalsy();
        });

        it('displays the default avatar if none was specified', () => {
            const defaultIconEl = avatarFixture.debugElement.query(By.css('daio-icon'));
            expect(defaultIconEl).toBeTruthy();
        });

        it('displays the specified avatar if it was specified', () => {
            let specifiedAvatarEl = avatarFixture.debugElement.query(By.css('.test-class'))
            expect(specifiedAvatarEl).toBeFalsy();

            avatarFixture.componentRef.setInput('testMockAvatar', true);
            avatarFixture.detectChanges();
            specifiedAvatarEl = avatarFixture.debugElement.query(By.css('.test-class'));
            expect(specifiedAvatarEl).toBeTruthy();
        });
    });
});