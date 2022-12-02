import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CurrencyUahPipe',
})
export class LandingPriceUiPipesCurrencyUahPipe implements PipeTransform {
  transform(value: string | number): string {
    return `${value} грн`;
  }
}
