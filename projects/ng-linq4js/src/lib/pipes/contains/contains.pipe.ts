import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {

  transform<T>(value: T[], object: T): boolean {
    return value.Contains(object);
  }

}
