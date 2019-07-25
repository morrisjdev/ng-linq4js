import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform<T>(value: T[], selector?: ((item: T) => any) | string, filter?: ((item: T) => boolean) | string): number {
    return value.Sum(selector, filter);
  }

}
