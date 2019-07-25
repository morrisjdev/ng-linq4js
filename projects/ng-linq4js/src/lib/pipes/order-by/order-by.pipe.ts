import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(value: T[], valueSelector: ((item: T) => any) | string): T[] {
    return value.OrderBy(valueSelector);
  }

}
