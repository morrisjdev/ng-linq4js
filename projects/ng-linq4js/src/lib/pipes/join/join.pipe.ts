import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform<T>(value: T[], character: string, selector?: ((item: T) => any) | string): string {
    return value.Join(character, selector);
  }

}
