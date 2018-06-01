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
} from './../common/form-group/validation-messages';

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

export const categoryForm = [
  {
    id: 'CatType',
    label: 'Category Type',
    control: 'input',
    type: 'text',
    value: '',
    validations: [ required ],
  },
  {
    id: 'CategoryId',
    label: 'Category Id',
    control: 'input',
    type: 'text',
    value: '',
    validations: [ required ],
  },
  {
    id: 'CategoryName',
    label: 'Category Name',
    control: 'input',
    type: 'text',
    value: '',
    validations: [ required ],
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
    id: 'OrderNo',
    label: 'Display order',
    control: 'input',
    type: 'number',
    value: '',
    validations: [ required ],
  },
  {
    id: 'Active',
    label: 'Publish this category live?',
    control: 'checkbox',
    type: 'checkbox',
    value: '',
    validations: [],
  }

];
