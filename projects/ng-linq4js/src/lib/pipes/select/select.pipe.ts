import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform<T, Y>(array: T[], selector: ((item: T) => Y) | string): Y[] {
    return array.Select(selector);
  }

}
