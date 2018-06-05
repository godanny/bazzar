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


export const listsForm = [

  {
    id: 'ListId',
    label: 'List Id',
    control: 'input',
    type: 'text',
    value: '',
    validations: [ required ],
  },
  {
    id: 'Title',
    label: 'Title',
    control: 'input',
    type: 'text',
    value: '',
    Validators: [ required ]
  },

  {
    id: 'SubTitle',
    label: 'SubTitle',
    control: 'input',
    type: 'text',
    value: '',
    Validators: [ required ]
  },

  {
    id: 'CategorySubId',
    label: 'Sub Category Id',
    control: 'input',
    type: 'text',
    value: '',
    validations: [ required ],
  },

  {
    id: 'SellerInfo',
    label: 'Seller message',
    control: 'input',
    type: 'text',
    value: '',
    validations: [ required ],
  },
  {
    id: 'SellerId',
    label: 'Seller id',
    control: 'input',
    type: 'text',
    value: '',
    validations: [ required ],
  },

  {
    id: 'state',
    control: 'select',
    label: 'State',
    options: [
      { value: 'All', label: 'All' },
      { value: 'NSW', label: 'NSW' },
      { value: 'ACT', label: 'ACT' },
      { value: 'SA', label: 'SA' },
      { value: 'VIC', label: 'VIC' },
      { value: 'WA', label: 'WA' },
      { value: 'QLD', label: 'Queensland' },
    ],
    validations: [ required ]
  },

  {
    id: 'Sale',
    label: 'Ready for sale?',
    control: 'checkbox',
    type: 'checkbox',
    value: '',
    validations: [ required ],
  },

  {
    id: 'EndDate',
    control: 'date',
    label: 'End Date',
    validations: [ required ],
  },

  {
    id: 'Active',
    label: 'Publish live?',
    control: 'checkbox',
    type: 'checkbox',
    value: '',
    validations: [],
  }

];
