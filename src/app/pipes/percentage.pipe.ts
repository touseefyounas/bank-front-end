import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: true
})
export class PercentagePipe implements PipeTransform {

  transform(percentage: number): string {
    if (percentage != null){
      return percentage + '%'
    }
    return percentage
  }

}
