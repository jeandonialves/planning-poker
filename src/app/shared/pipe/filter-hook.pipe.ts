import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHook',
  standalone: true,
})
export class FilterHookPipe implements PipeTransform {
  transform<T>(items: Array<T>, filterHook: (item: T) => boolean): Array<T> {
    if (!items || !filterHook) {
      return items;
    }
    return items.filter((item) => filterHook(item));
  }
}
