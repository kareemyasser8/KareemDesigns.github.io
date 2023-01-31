import { AbstractControl, ValidationErrors } from "@angular/forms";

export class FormValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
      if((control.value as string).indexOf(' ') >= 0)
      return{ cannotContainSpace: true}

      return null;
  }

  static cannotContainNumbers(control: AbstractControl): ValidationErrors | null {
        let hasNumbers = /\d/;
        if(hasNumbers.test(control.value as string))
          return {cannotContainNumbers: true}
        else return null;
  }

}


