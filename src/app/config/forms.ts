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

export const subCategoryForm = [
  {
    id: 'CategoryId',
    label: 'Category Id',
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
    id: 'CategorySubName',
    label: 'Sub Category Name',
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
    label: 'Publish this Sub Category live?',
    control: 'checkbox',
    type: 'checkbox',
    value: '',
    validations: [],
  }

];

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
