import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

let nextUniqueId = 0;

@Component({
    standalone: true,
    selector: 'daio-input',
    templateUrl: './daio-input.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FormsModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: DaioInputComponent,
            multi: true
        }
    ]
})
export class DaioInputComponent implements ControlValueAccessor {
    @HostBinding('class') inputClass = 'daio-input';
    @Input() label?: string;
    
    @Input() 
    set placeholder(value: string) {
        this._placeholder = value;
    }

    get placeholder(): string {
        return this._placeholder;
    }

    public id?: string;
    public value?: string;
    public disabled = false;

    private _placeholder = '';

    onChange = (value: string): void => { value };
    onTouched = (): void => void 0;

    constructor() {
        this.id = `${++nextUniqueId}`; 
    }

    public inputViewChange(value: string): void {
        this.value = value;
        this.onChange(value);
    }

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}