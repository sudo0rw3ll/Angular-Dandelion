import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(timestamp: number): string {
    if (!timestamp || isNaN(timestamp)) {
      return '';
    }

    const date = new Date(timestamp);
    const day = this.padZero(date.getDate());
    const month = this.padZero(date.getMonth() + 1);
    const year = date.getFullYear();

    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    const seconds = this.padZero(date.getSeconds());

    return `${day}.${month}.${year}. ${hours}:${minutes}:${seconds}`;
  }

  private padZero(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
