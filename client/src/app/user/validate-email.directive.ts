import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import { isValidEmail } from '../util/util';

@Directive({
    selector: '[appValidateEmail]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ValidateEmailDirective,
            multi: true
        }
    ]
})
export class ValidateEmailDirective implements Validator {
    @Input() appValidateEmail: string | undefined;

    constructor() { }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if (isValidEmail(control.value) == 'valid') {
            return null;
        }

        return {
            appValidateEmail: control.value
        };
    }
}
