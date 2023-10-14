import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appDateRangeValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateRangeValidatorDirective,
      multi: true,
    },
  ],
})
export class DateRangeValidatorDirective implements Validator {
  @Input('appDateRangeValidator') dateRangeControlNames: string[];

  validate(control: AbstractControl): ValidationErrors | null {
    if(this.dateRangeControlNames){

      const dateRangeControls = this.dateRangeControlNames.map((controlName) =>
        control.get(controlName)
      );
  
      const beginningDateControl = dateRangeControls[0];
      const endingDateControl = dateRangeControls[1];
  
      if (
        beginningDateControl &&
        endingDateControl &&
        beginningDateControl.value &&
        endingDateControl.value &&
        beginningDateControl.value > endingDateControl.value
      ) {
        return { dateRangeError: true };
      }
  
      return null;
    }
    return null
  }
}
