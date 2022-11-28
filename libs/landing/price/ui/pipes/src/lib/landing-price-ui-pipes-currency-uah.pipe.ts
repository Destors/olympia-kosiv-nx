import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'landingPriceUiPipesCurrencyUah',
})
export class LandingPriceUiPipesCurrencyUahPipe implements PipeTransform {
  transform(value: string | number): string {
    return `${value} грн`;
  }
}
