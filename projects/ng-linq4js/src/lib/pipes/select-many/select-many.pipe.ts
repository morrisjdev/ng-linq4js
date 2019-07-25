import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectMany'
})
export class SelectManyPipe implements PipeTransform {

  transform<T, Y>(value: T[], selector: ((item: T) => Y[]) | string): Y[] {
    return value.SelectMany(selector);
  }

}
