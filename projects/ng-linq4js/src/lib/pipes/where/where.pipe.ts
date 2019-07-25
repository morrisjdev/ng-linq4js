import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'where'
})
export class WherePipe implements PipeTransform {

  transform<T>(array: T[], filter: ((item: T, index?: number) => boolean) | string): T[] {
    return array.Where(filter);
  }

}
