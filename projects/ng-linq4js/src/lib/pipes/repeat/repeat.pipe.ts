import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {

  transform<T>(array: T[], value: T, count: number): T[] {
    return array.Repeat(value, count);
  }
}
