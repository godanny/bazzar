import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';

import { IFormField, IValidation } from './../../models/forms';
import { required } from './validation-messages/required.validation';

import { WizardService } from './../../services/wizard.service';

import {
  ValidateCheckboxRequired,
  validatePhone,
  DateFormatsValidators,
  EmailFormatsValidators,
  ValidateAddressCapture,
  alphanumeric
} from './validations';


import { remove } from 'lodash';

@Component({
  selector: 'baz-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.styl']
})
export class FormGroupComponent implements OnInit {
  @Input() fields: IFormField[];

  formInstance: FormGroup;
  showForm = false;

  constructor(
    private fb: FormBuilder,
    private wizard: WizardService,
  ) {
    this.formInstance = fb.group( {} );
  }

  ngOnInit(): void {
    this.initForm();
    this.addRequiredValidation();
  }


  initForm(): void {
    if ( this.fields ) {
      const formFields: any = {};

      // distill the formfields from the array of fields
      //
      this.fields.forEach( field => {
        let validators = [];
        if ( field.validations ) {
          validators = this.getMappedValidators(field.validations);
        }

        const value = field.value || '';
        // if ( this.wizard.lead && this.wizard.lead[ field.id ] ) {
        //   value = this.wizard.lead[ field.id];
        //   field.value = value;
        // }

        formFields[ field.id ] = [ {
          'value': value,
          'disabled': !!field.disable
        }, validators ];
      } );

      this.formInstance = this.fb.group( formFields );
      this.showForm = true;
    }
  }

  checkError( id: string, type: string ) {
    const control: AbstractControl = this.formInstance.get( id );
    return !control.pristine && control.hasError( type );
  }

  showField( field: IFormField, control ): boolean {
    // console.log( field );
    let fieldDependentFlag = true;
    if (field.dependent) {
      const [controlId, value] = this.getDependentDetails(field);
      const dependentFormControl = this.formInstance.get(controlId);

      fieldDependentFlag = ( !!value ) ?
        (dependentFormControl.value === value) : (!!dependentFormControl && !!dependentFormControl.value);
    }
    return ( (field.control === control) && fieldDependentFlag);
  }

  addRequiredValidation(): void {
    this.fields.forEach( field => {
      if (field.dependent) {
        const [controlId, fieldDefaultValue] = this.getDependentDetails(field);
        const formControl = this.formInstance.get(controlId);

        formControl.valueChanges.subscribe( (value) => {
          this.formControlValueChangesCallback(value, field, fieldDefaultValue);
          if (field.control === 'dependent-select') {
            this.updateDefaultValue(field);
          }
        });

        if (formControl.valid) {
          this.formControlValueChangesCallback(formControl.value, field, fieldDefaultValue);
        }
      }
    });
  }

  private updateDefaultValue(field: any): void {
    const dependentFormGroup = this.formInstance.get(field.id);
    dependentFormGroup.setValue(null, {
      onlySelf: true
    });
    dependentFormGroup.markAsPristine();
    dependentFormGroup.markAsUntouched();
    this.updateAndValidate(dependentFormGroup);
  }

  private formControlValueChangesCallback(value: string, field: any, fieldDefaultValue: string): any {
    const dependentFormGroup = this.formInstance.get(field.id);
    if ( !field.validations) {
      field.validations = [];
    }
    if ( this.checkForValidFormControl(field) && typeof value === 'string') {
      if ( fieldDefaultValue === value ) {
        field.validations.push(<IValidation> required);
        dependentFormGroup.setValidators(this.getMappedValidators(field.validations));
        dependentFormGroup.markAsPristine();
        dependentFormGroup.markAsUntouched();
        this.updateAndValidate(dependentFormGroup);
      } else {
        field.validations = this.removeRequiredValidations(field.validations);
        dependentFormGroup.setValidators(this.getMappedValidators(field.validations));
        dependentFormGroup.setValue(null);
        dependentFormGroup.setErrors(null);
        this.updateAndValidate(dependentFormGroup);
      }
    } else {
      field.validations.push(<IValidation> required);
      dependentFormGroup.setValidators(this.getMappedValidators(field.validations));
      this.updateAndValidate(dependentFormGroup);
    }
  }

  private removeRequiredValidations(validations: IValidation[]) {
    return remove(validations, (validation) => {
      return validation.type !== 'required';
    });
  }

  private getMappedValidators(validations: IValidation[]): any[] {
    const validatorList = [];

    validations.forEach ((val) => {
      switch ( val.type ) {
        case 'required':
          validatorList.push(Validators.required);
          break;

        case 'email':
          validatorList.push(EmailFormatsValidators.validateEmail);
          break;

        case 'checkbox-required':
          validatorList.push(ValidateCheckboxRequired);
          break;

        case 'phone':
          validatorList.push(validatePhone);
          break;

        case 'min':
          validatorList.push(Validators.min(val.value));
          break;

        case 'max':
          validatorList.push(Validators.max(val.value));
          break;

        case 'address-capture':
          validatorList.push(ValidateAddressCapture);
          break;

        case 'date':
          validatorList.push(DateFormatsValidators.validateDate);
          break;

        case 'min-date':
          validatorList.push(DateFormatsValidators.minDate);
          break;

        case 'max-date':
          validatorList.push(DateFormatsValidators.maxDate);
          break;

        case 'alphanumeric':
          validatorList.push(alphanumeric);
          break;
      }
    });

    return validatorList;
  }

  private checkForValidFormControl(field) {
    return field.control.indexOf('input') !== -1 || field.control.indexOf('radio-button') !== -1 || field.control.indexOf('address') !== -1;
  }

  private updateAndValidate(formControl: AbstractControl): void {
    formControl.updateValueAndValidity();
  }

  private getDependentDetails(field: IFormField): string[] {
    return field.dependent.split('.');
  }

}
