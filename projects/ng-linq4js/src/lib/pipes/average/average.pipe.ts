import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform<T>(value: T[], selector?: ((item: T) => any) | string, filter?: ((item: T) => boolean) | string): number {
    return value.Average(selector, filter);
  }

}
