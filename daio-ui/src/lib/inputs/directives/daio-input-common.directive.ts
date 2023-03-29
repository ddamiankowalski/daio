import { ChangeDetectorRef, Directive, HostBinding, inject, Injector, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";
import { IDaioFieldMessage } from "../interfaces/daio-field-message.interface";
import { DaioInputValidatorService } from "../services/daio-input-validator.service";

let nextUniqueId = 0;

@Directive()
export class DaioInputCommon implements ControlValueAccessor, OnInit {
    @HostBinding('class') inputClass = 'daio-input';

    @Input() label?: string;
    @Input() required = false;
    
    @Input() 
    set placeholder(value: string) {
        this._placeholder = value;
    }

    get placeholder(): string {
        return this._placeholder;
    }
    
    public id: string;
    public value = '';
    public disabled = false;
    public fieldMessage?: IDaioFieldMessage;

    protected _control?: NgControl;
    protected _injector: Injector;
    protected _placeholder = '';

    onChange = (value: string): void => { value };
    onTouched = (): void => void 0;
    
    constructor(
        protected cdRef: ChangeDetectorRef,
        protected validator: DaioInputValidatorService,
    ) {
        this._injector = inject(Injector);
        this.id = `${++nextUniqueId}`; 
    }

    ngOnInit(): void {
        this._control = this._injector.get(NgControl);
        this.fieldMessage = this.validator.setInitialMessage();
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
        this.cdRef.detectChanges();
    }

    protected validateInput(): void {
        if(this._control && this.fieldMessage) {
            this.validator.validate(this.fieldMessage, this._control);
        }
    }
}