import { CurrencyPipe } from '@angular/common';

export const min = ( value: number ) => {
  return {
    type: 'min',
    message: 'The minimum loan amount is ' + new CurrencyPipe( 'en-AU' ).transform( value, 'AUD', 'symbol-narrow', '1.0' ),
    value: value
  };
};
