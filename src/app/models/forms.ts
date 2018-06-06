export interface IValidation {
  type: string;
  message: string;
  value?: number;
}

export type IDetailsType = 'SALE' | 'DELIVERY' | 'FULLDETAIL' | 'PICKUP';

export interface ISection {
  SectionOrder: number;
  SectionType: IDetailsType;
  SectionTitle: string;
  Mandatory: true;
}

export interface IItems {
  SectionOrder: number;
  ItemOrder: number;
  ItemTitle: string;
  ItemValue: number;
  Maximum: number;
  ItemType: IDetailsType;
  ItemSelected: number;
}

export interface IFormField {
  id: string;
  label: string;
  control: string; // need to fix
  type?: string;
  validations?: IValidation[] | null;
  value?: string;
  dependent?: string;
  disable?: boolean;
  items?: ISection | IItems;
}
