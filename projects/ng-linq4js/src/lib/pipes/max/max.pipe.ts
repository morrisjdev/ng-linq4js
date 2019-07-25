import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'max'
})
export class MaxPipe implements PipeTransform {

  transform<T>(value: T[], valueSelector?: ((item: T) => any) | string): (T | null) {
    return value.Max(valueSelector);
  }

}
