import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'all'
})
export class AllPipe implements PipeTransform {

  transform<T>(value: T[], filter: ((item: T) => boolean) | string): boolean {
    return value.All(filter);
  }

}
