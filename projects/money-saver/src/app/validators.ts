import { AbstractControl, ValidatorFn } from '@angular/forms';

const notNumberPattern = new RegExp('[^0-9.,]');

export function NumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (!control.value) {
      return null;
    }

    const value = (control.value as string).trim();

    const wrongValue = notNumberPattern.test(value) || (value.match(/[,.]/g) || []).length > 1

    if (!wrongValue) {
      return null;
    }

    return {
      wrongValue: {
        value
      }
    };
  };
}
