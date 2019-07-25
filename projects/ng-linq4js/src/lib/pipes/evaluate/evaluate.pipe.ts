import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evaluate'
})
export class EvaluatePipe implements PipeTransform {

  transform(array: any[], command: string): any {
    return array.Evaluate(command);
  }

}
