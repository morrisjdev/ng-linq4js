import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'qWhere'
})
export class QWherePipe implements PipeTransform {

  transform<T>(array: T[], filter: string): T[] {
    return array.Where(filter);
  }

}
