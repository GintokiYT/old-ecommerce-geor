import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDecimals',
})
export class ToDecimalsPipe implements PipeTransform {
  transform(
    value: string | number | undefined,
    decimalPlaces: number = 2
  ): string {
    if (!value) {
      return '0.00';
    }

    const number = Number(value).toLocaleString('en-US', {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });

    return number;
  }
}
