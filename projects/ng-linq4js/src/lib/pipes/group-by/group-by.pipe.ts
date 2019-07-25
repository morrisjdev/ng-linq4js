import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  transform<T>(value: T[], selector: ((item: T) => any) | string): T[][] {
    return value.GroupBy(selector);
  }

}
