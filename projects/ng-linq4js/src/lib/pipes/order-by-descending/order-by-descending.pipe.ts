import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDescending'
})
export class OrderByDescendingPipe implements PipeTransform {

  transform<T>(value: T[], valueSelector: ((item: T) => any) | string): T[] {
    return value.OrderByDescending(valueSelector);
  }

}
