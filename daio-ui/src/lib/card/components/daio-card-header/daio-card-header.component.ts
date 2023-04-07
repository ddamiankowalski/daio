import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Directive, HostBinding, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from "../../../icons";

@Component({
    standalone: true,
    templateUrl: './daio-card-header.component.html',
    selector: 'daio-card-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        CommonModule,
        DaioIconComponent
    ]
})
export class DaioCardHeaderComponent {
    @HostBinding('class') cardHeaderClass = 'daio-card-header';

    protected showAvatar = false;

    public setShowAvatar(): void {
        this.showAvatar = true;
    }
}

@Directive({
    standalone: true,
    selector: 'daio-card-header[daioShowAvatar]'
})
export class DaioCardHeaderAvatarDirective implements OnInit {
    @Input() imageSrc?: string;
    
    constructor(
        private header: DaioCardHeaderComponent
    ) {}

    ngOnInit(): void {
        this.header.setShowAvatar();
    }
}