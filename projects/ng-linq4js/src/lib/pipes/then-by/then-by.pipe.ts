import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thenBy'
})
export class ThenByPipe implements PipeTransform {

  transform<T>(value: T[], valueSelector: ((item: T) => any) | string): T[] {
    return value.ThenBy(valueSelector);
  }

}
