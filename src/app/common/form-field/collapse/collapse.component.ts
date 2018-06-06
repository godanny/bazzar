import { Component, Input, ContentChild, HostBinding, ViewChild, OnInit } from '@angular/core';
import { trigger, transition, style, animate, group } from '@angular/animations';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { FormGroupComponent } from './../../form-group/form-group.component';

import { DataTableResource } from 'angular5-data-table';

@Component( {
  selector: 'baz-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.styl'],
  animations: [
    trigger(
      'enterAnimation', [
        transition( ':enter', [
          style( { transform: 'translateX(100%)', opacity: 0 } ),
          animate( '500ms', style( { transform: 'translateX(0)', opacity: 1 } ) )
        ] ),
        transition( ':leave', [
          style( { transform: 'translateX(0)', opacity: 1 } ),
          animate( '500ms', style( { transform: 'translateX(100%)', opacity: 0 } ) )
        ] )
      ]
    )
  ]
} )
export class BazCollapseComponent implements OnInit {
  @HostBinding( 'class.fxFlex' ) true;

  @ViewChild( FormGroupComponent )
  private formGroupComponent: FormGroupComponent;

  @Input() group: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() tabindex: string;
  @Input() items: any[];
  @Input() sections: any[];


  public isAdded: boolean;
  public panels: any[];

  public dataResource: any;
  public dataCount: number;
  limits = [10, 20, 40, 80];

  private sectionFormControl: AbstractControl;

  constructor() {
    this.isAdded = false;
    this.panels = [];
  }

  ngOnInit() {
    this.sectionFormControl = this.group.get( 'Sections' );

    this.sectionFormControl.valueChanges.subscribe( ( values ) => {
      this.dataResource = new DataTableResource( values );
      this.dataResource.count().then( count => this.dataCount = count );
    } );
  }


  doSave(): void {
    console.log( this.formGroupComponent.formInstance.value );
    this.validateForm();

    const panelDetail = this.formGroupComponent.formInstance.value;
    this.panels.push( panelDetail );

    if ( this.formGroupComponent.formInstance.valid ) {
      console.log( 'form is valid....' );
      const parentSectionsFormControl = this.group.get( 'Sections' );
      parentSectionsFormControl.setValue( this.panels );

      parentSectionsFormControl.markAsDirty();
      parentSectionsFormControl.markAsTouched();

      parentSectionsFormControl.updateValueAndValidity();

      this.isAdded = false;
    }
  }
  doAdd(): void {
    this.isAdded = true;
    console.log( 'panel is added' );
  }

  hasError(): boolean {
    const control: AbstractControl = this.group.get( this.name );
    return control.invalid && control.touched;
  }

  reloadItems( params ) {
    this.dataResource.query( params ).then( panels => this.panels = panels );
  }

  // special properties:
  rowClick( rowEvent ) {
    console.log( 'Clicked: ' + rowEvent.row.item.name );
  }

  rowDoubleClick( rowEvent ) {
    alert( 'Double clicked: ' + rowEvent.row.item.name );
  }

  rowTooltip( item ) {
    return item.jobTitle;
  }

  private validateForm(): void {

    Object.keys( this.formGroupComponent.formInstance.controls ).forEach( field => {
      const control = this.formGroupComponent.formInstance.get( field );
      control.markAsDirty( { onlySelf: true } );
      control.markAsTouched( { onlySelf: true } );
    } );
  }


}
