// import { Validators } from '@angular/forms';
import {
    alphanumeric,
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



export const detailsForm = [
  {
    id: 'ListId',
    label: 'List Id',
    control: 'input',
    type: 'text',
    value: '',
    validations: [ required ]
  },
  {
    id: 'DetailId',
    label: 'Detail Id',
    control: 'input',
    type: 'text',
    value: '',
    validations: [ required ]
  },
  {
    id: 'DetailType',
    label: 'Detail Type',
    control: 'input',
    type: 'text',
    value: '',
    validations: [ required ]
  },
  {
    id: 'Sections',
    label: 'Sections',
    control: 'collapse',
    items: [
      {
        id: 'SectionOrder',
        label: 'Section Order',
        control: 'input',
        type: 'number',
        value: '0',
        validations: [ required ]
      },
      {
        id: 'SectionType',
        label: 'Section Type',
        control: 'select',
        options: [
          { value: 'SALE', label: 'SALE' },
          { value: 'DELIVERY', label: 'DELIVERY' },
          { value: 'FULLDETAIL', label: 'FULLDETAIL' },
        ],
        value: 'SALE',
        validations: [ required ]
      },
      {
        id: 'SectionTitle',
        label: 'Section Title',
        control: 'input',
        type: 'text',
        value: 'Summa details',
        validations: [ required ]
      },
      {
        id: 'Mandatory',
        label: 'Is mandatory',
        control: 'checkbox',
        type: 'checkbox',
        value: true,
        validations: [ checkboxRequired ]
      },
    ]
  },
  {
    id: 'Items',
    label: 'Items',
    control: 'card',
    items: [
      {
        id: 'SectionOrder',
        label: 'Section Order',
        control: 'input',
        type: 'number',
        value: '',
        validations: [ required ]
      },
      {
        id: 'ItemOrder',
        label: 'Item Order',
        control: 'input',
        type: 'number',
        value: '',
        validations: [ required ]
      },
      {
        id: 'ItemTitle',
        label: 'Item Title',
        control: 'input',
        type: 'text',
        value: '',
        validations: [ required ]
      },
      {
        id: 'ItemValue',
        label: 'Item Title',
        control: 'input',
        type: 'number',
        value: '',
        validations: [ required ]
      },
      {
        id: 'Maximum',
        label: 'Maximum',
        control: 'input',
        type: 'number',
        value: '',
        validations: [ required ]
      },
      {
        id: 'ItemType',
        label: 'Item Type',
        control: 'select',
        options: [
          { value: 'SALE', label: 'SALE' },
          { value: 'DELIVERY', label: 'DELIVERY' },
          { value: 'FULLDETAIL', label: 'FULLDETAIL' },
          { value: 'PICKUP', label: 'PICKUP' }
        ],
        validations: [ required ]
      },
      {
        id: 'ItemSelected',
        label: 'Item Selected',
        control: 'input',
        type: 'number',
        value: '',
        validations: [ required ]
      },
    ]
  }
];
