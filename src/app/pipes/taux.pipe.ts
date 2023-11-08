import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taux'
})
export class TauxPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
