import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thenByDescending'
})
export class ThenByDescendingPipe implements PipeTransform {

  transform<T>(value: T[], valueSelector: ((item: T) => any) | string): T[] {
    return value.ThenByDescending(valueSelector);
  }

}
