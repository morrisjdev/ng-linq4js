import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'min'
})
export class MinPipe implements PipeTransform {

  transform<T>(value: T[], valueSelector?: ((item: T) => any) | string): (T | null) {
    return value.Min(valueSelector);
  }

}
