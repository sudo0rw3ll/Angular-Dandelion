import { Injectable } from '@angular/core';
import { Log } from '../model';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private apiCallsLog: Array<Log> = new Array<Log>();

  constructor() { }

  getApiLogs() {
    return this.apiCallsLog;
  }

  log(log: Log) {
    this.apiCallsLog.push(log);
  }
}
