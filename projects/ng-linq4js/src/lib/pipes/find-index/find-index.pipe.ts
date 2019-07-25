import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findIndex'
})
export class FindIndexPipe implements PipeTransform {

  transform<T>(value: T[], filter: ((item: T) => boolean) | string): number {
    return value.FindIndex(filter);
  }

}
