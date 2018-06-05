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
    control: 'colapse',
    items: [
      {
        id: 'SectionOrder',
        lable: 'Section Order',
        control: 'input',
        type: 'number',
        value: '',
        validations: [ required ]
      },
      {
        id: 'SectionType',
        lable: 'Section Type',
        control: 'select',
        options: [
          { value: 'SALE', label: 'SALE' },
          { value: 'DELIVERY', label: 'DELIVERY' },
          { value: 'FULLDETAIL', label: 'FULLDETAIL' },
        ],
        validations: [ required ]
      },
      {
        id: 'SectionTitle',
        lable: 'Section Title',
        control: 'input',
        type: 'text',
        value: '',
        validations: [ required ]
      },
      {
        id: 'Mandatory',
        lable: 'Is mandatory',
        control: 'checkbox',
        type: 'checkbox',
        value: '',
        validations: [ required ]
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
        lable: 'Section Order',
        control: 'input',
        type: 'number',
        value: '',
        validations: [ required ]
      },
      {
        id: 'ItemOrder',
        lable: 'Item Order',
        control: 'input',
        type: 'number',
        value: '',
        validations: [ required ]
      },
      {
        id: 'ItemTitle',
        lable: 'Item Title',
        control: 'input',
        type: 'text',
        value: '',
        validations: [ required ]
      },
      {
        id: 'ItemValue',
        lable: 'Item Title',
        control: 'input',
        type: 'number',
        value: '',
        validations: [ required ]
      },
      {
        id: 'Maximum',
        lable: 'Maximum',
        control: 'input',
        type: 'number',
        value: '',
        validations: [ required ]
      },
      {
        id: 'ItemType',
        lable: 'Item Type',
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
        lable: 'Item Selected',
        control: 'input',
        type: 'number',
        value: '',
        validations: [ required ]
      },
    ]
  }
];
