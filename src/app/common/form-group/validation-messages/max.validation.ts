import { CurrencyPipe } from '@angular/common';

export const max = ( value: number ) => {
  return {
    type: 'max',
    message: 'The maximum loan amount is ' + new CurrencyPipe( 'en-AU' ).transform( value, 'AUD', 'symbol-narrow', '1.0' ),
    value: value
  };
};
