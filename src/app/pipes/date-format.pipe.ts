import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    const formattedDate =
      value !== null ? formatDate(value, 'MMMM d, yyyy', 'en-US') : '';
    return formattedDate;
  }
}
