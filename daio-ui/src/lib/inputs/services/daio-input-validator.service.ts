import { Injectable } from "@angular/core";
import { NgControl } from "@angular/forms";
import { DaioRendererService } from "../../common/services/daio-renderer.service";
import { IDaioFieldMessage } from "../interfaces/daio-field-message.interface";

@Injectable()
export class DaioInputValidatorService {
    constructor(
        protected renderer: DaioRendererService
    ) {}

    validate(fieldMessage: IDaioFieldMessage, control: NgControl): void {
        if(control.touched && control.invalid) {
            fieldMessage.type = 'error';
            fieldMessage.message = 'This field contains errors'

            this.renderer.addClass('daio-input--error');
        } else {
            this.clearMessage(fieldMessage);
        }
    }

    setInitialMessage(): IDaioFieldMessage {
        return { type: null, message: null };
    }

    clearMessage(fieldMessage: IDaioFieldMessage): void {
        fieldMessage.message = null;
        fieldMessage.type = null;

        this.renderer.removeClass('daio-input--error');
    }
}