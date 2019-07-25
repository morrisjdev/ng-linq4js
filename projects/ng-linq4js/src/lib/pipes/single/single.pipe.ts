import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'single'
})
export class SinglePipe implements PipeTransform {

  transform<T>(value: T[], filter?: ((item: T) => boolean) | string): (T | null) {
    return value.SingleOrDefault(filter);
  }

}
