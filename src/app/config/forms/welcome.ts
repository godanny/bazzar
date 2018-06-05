import { Validators } from '@angular/forms';
import { alphanumeric,
   addressCapture,
   checkboxRequired,
   date,
   email,
   emailPattern,
   max,
   maxDate,
   min,
   minDate,
   phone,
  required
} from './../../common/form-group/validation-messages';

export const welcomeForm = [
  {
    id: 'category Type',
    control: 'select',
    label: 'Category type',
    options: [
      { value: 'Special', label: 'Special' },
      { value: 'Referral', label: 'Referral' },
    ],
    validations: [ required ]
  }
];

