import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from "@angular/core";
import { NgIf } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { DaioIconComponent } from "../../../icons/components";
import { DaioInputCommon } from "../../directives/daio-input-common.directive";
import { DaioInputValidatorService } from "../../services/daio-input-validator.service";

@Component({
    standalone: true,
    selector: 'daio-input',
    templateUrl: './daio-input.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        FormsModule,
        NgIf,
        DaioIconComponent
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: DaioInputComponent,
            multi: true
        },
        DaioRendererService,
        DaioInputValidatorService
    ]
})
export class DaioInputComponent extends DaioInputCommon {
    constructor(
        protected override validator: DaioInputValidatorService,
        protected override cdRef: ChangeDetectorRef,
    ) {
        super(cdRef, validator);
    }

    public inputViewChange(value: string): void {
        this.value = value;
        this.onChange(value);
        this.validateInput();
    }

    public inputViewBlur(): void {
        this.onTouched();
        this.validateInput();
    }

    onClearIconClick(): void {
        this.clearInput();
        this.validateInput();
    }

    private clearInput(): void {
        this.value = '';
        this.onChange('');
    }
}