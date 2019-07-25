import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'get'
})
export class GetPipe implements PipeTransform {

  transform<T>(value: T[], index: number): T {
    return value.Get(index);
  }

}
