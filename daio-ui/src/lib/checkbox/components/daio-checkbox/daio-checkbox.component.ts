import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, ViewEncapsulation } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    standalone: true,
    selector: 'daio-checkbox',
    templateUrl: './daio-checkbox.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DaioCheckboxComponent),
            multi: true
        }
    ]
})
export class DaioCheckboxComponent implements ControlValueAccessor {
    @HostBinding('class') checkboxClass = 'daio-checkbox';
    
    private checked = false;
    onChange!: (value: boolean) => void;

    protected setValue(): void {
        this.checked = !this.checked;
        this.onChange(this.checked);
    }

    writeValue(value: boolean): void {
        this.checked = !!value;
    }

    registerOnChange(fn: (value: boolean) => void): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
       ///throw new Error("Method not implemented.");
    }
    setDisabledState?(isDisabled: boolean): void {
        //throw new Error("Method not implemented.");
    }
}