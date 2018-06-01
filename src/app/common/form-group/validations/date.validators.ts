import { AbstractControl } from '@angular/forms';
import { DateUtils } from '../../utils/date.util';

export class DateFormatsValidators {

  static validateDate(control: AbstractControl) {

    const parsedDate = Date.parse(control.value);
    if (isNaN(parsedDate) ) {
      return { date: true };
    }

    return null;
  }

  static minDate(control: AbstractControl) {
    if (control.value === '') {
      return null;
    }

    if (!DateUtils.isValidDate(control.value)) {
      if (control.errors && control.errors['max-date']) {
        delete control.errors['max-date'];
      }
      return { 'min-date': true };
    }

    const minDate = new Date('1900-01-01');
    const currentDate = DateUtils.getDateFromControl(control.value);

    if (!currentDate || (minDate.getTime() > currentDate.getTime())) {
      return { 'min-date': true };
    }


    return null;
  }

  static maxDate(control: AbstractControl) {
    if (control.value === '') {
      return null;
    }

    const currentDate = DateUtils.getDateFromControl(control.value);
    const maxDate = DateUtils.getPreviousDateByYears(18);

    if (!currentDate || maxDate.getTime() < currentDate.getTime()) {
      return { 'max-date': true };
    }

    return null;
  }
}
