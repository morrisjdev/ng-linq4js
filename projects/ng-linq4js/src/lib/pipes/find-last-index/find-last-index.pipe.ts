import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findLastIndex'
})
export class FindLastIndexPipe implements PipeTransform {

  transform<T>(value: T[], filter: ((item: T) => boolean) | string): number {
    return value.FindLastIndex(filter);
  }

}
