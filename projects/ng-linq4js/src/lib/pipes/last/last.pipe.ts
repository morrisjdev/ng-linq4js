import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'last'
})
export class LastPipe implements PipeTransform {

  transform<T>(value: T[], filter?: ((item: T) => boolean) | string): (T | null) {
    return value.LastOrDefault(filter);
  }

}
