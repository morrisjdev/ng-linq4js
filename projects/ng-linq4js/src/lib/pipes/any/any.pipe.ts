import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'any'
})
export class AnyPipe implements PipeTransform {

  transform<T>(value: T[], filter?: ((item: T) => boolean) | string): boolean {
    return value.Any(filter);
  }

}
