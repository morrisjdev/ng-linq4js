import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distinct'
})
export class DistinctPipe implements PipeTransform {

  transform<T>(value: T[], valueSelector?: ((item: T) => any) | string): T[] {
    return value.Distinct(valueSelector);
  }

}
