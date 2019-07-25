import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform<T>(value: T[], start: number, length: number): T[] {
    return value.Range(start, length);
  }

}
