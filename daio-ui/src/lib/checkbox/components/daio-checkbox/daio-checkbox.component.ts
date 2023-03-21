import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostBinding, Input, Renderer2, ViewChild, ViewEncapsulation } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { DaioIconComponent } from "../../../icons";

let nextUniqueId = 0;

@Component({
    standalone: true,
    selector: 'daio-checkbox',
    templateUrl: './daio-checkbox.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DaioIconComponent],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DaioCheckboxComponent),
            multi: true
        }
    ]
})
export class DaioCheckboxComponent implements ControlValueAccessor, AfterViewInit {
    @HostBinding('class') checkboxClass = 'daio-checkbox';
    @ViewChild('input') inputElement!: ElementRef<HTMLInputElement>;

    constructor(
        private renderer: Renderer2 
    ) {
        this.id = `${++nextUniqueId}`;
    }

    @Input() set disabled(value: boolean) {
        this._disabled = value;
    } 

    get disabled(): boolean {
        return this._disabled;
    }
    
    public id?: string;

    private _disabled = false;
    private checked = true;

    onChange!: (value: boolean) => void;
    onTouched!: () => void;

    onCheckboxClick(): void {
        this.checked = this.inputElement.nativeElement.checked;
        this.onChange(this.checked);
    }

    onLabelClick(): void {
        this.checked = !this.checked;
        this.syncNativeElement();
        this.onChange(this.checked);
        this.inputElement.nativeElement.focus();
    }

    private syncNativeElement(): void {
        if(this.inputElement) {
            this.inputElement.nativeElement.checked = this.checked;
        }
    }

    ngAfterViewInit(): void {
        this.syncNativeElement();
    }

    writeValue(value: boolean): void {
        this.checked = !!value;
    }

    registerOnChange(fn: (value: boolean) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
       this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}