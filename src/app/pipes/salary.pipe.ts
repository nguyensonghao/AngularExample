import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    try {
      if (value) {
        return parseInt(value);
      }
      
      return value;
    } catch (error) {
      return value;
    }
  }

}
