import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform<T>(value: T[], filter?: ((item: T) => boolean) | string): number {
    return value.Count(filter);
  }

}
