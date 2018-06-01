export interface IValidation {
  type: string;
  message: string;
  value?: number;
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
}
