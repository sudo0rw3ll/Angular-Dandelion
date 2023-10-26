import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { environment } from 'src/environments/environment';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  token: string;

  constructor(private configService: ConfigService, private loggerService: LoggerService) {
    this.token = localStorage.getItem('userToken')!;
  }

  ngOnInit(): void {
    // localStorage.setItem('userToken', environment.token);
    console.log(this.loggerService.getApiLogs());
  }

  setToken(event: Event): void {
    let value = (<HTMLInputElement>event.target).value;
    this.configService.setToken(value);
  }
}
