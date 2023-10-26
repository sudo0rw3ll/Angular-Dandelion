import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../service/logger.service';
import { Log } from '../model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  logs: Array<Log> = new Array<Log>();
  textLogs: string;

  constructor(private loggerService: LoggerService) {
    this.textLogs = '';
  }

  ngOnInit(): void {
    this.logs = this.loggerService.getApiLogs();
    this.textLogs = this.getLogsAsString();
  }

  getLogsAsString(): string {
    let result: string = '';

    for (let log of this.logs) {
      result += `[${this.transform(log.timestamp)}] ${log.method} ${log.endpoint}\n`;
    }

    return result;
  }

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
