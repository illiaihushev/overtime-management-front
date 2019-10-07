import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return emailValidator()(control);
  }

}

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const emailRegExp = new RegExp('^[a-z]+@([a-z]+\\.)*gmail\\.com$', 'i');
    const isInvalid = !emailRegExp.test(control.value);
    return isInvalid ? {invalidEmail: {value: control.value}} : null;
  };
}
