import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true,
})
export class OrderByPipe implements PipeTransform {
  transform(value: any, propName: string) {
    return value.sort((a: any, b: any) => {
      if (a[propName] < b[propName]) {
        return -1;
      } else if (a[propName] === b[propName]) {
        return 0;
      } else if (a[propName] > b[propName]) {
        return 1;
      }
      if (a[propName] > b[propName]) return 1;
      else return 1;
    });
  }
}
