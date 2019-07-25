import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skip'
})
export class SkipPipe implements PipeTransform {

  transform<T>(value: T[], count: number): T[] {
    return value.Skip(count);
  }

}
