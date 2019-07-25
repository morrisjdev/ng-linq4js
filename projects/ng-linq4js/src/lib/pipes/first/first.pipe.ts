import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform<T>(value: T[], filter?: ((item: T) => boolean) | string): (T | null) {
    return value.FirstOrDefault(filter);
  }

}
