import { Component, OnInit } from '@angular/core';
import { SentimentAnalysisData } from '../model';
import { DandelionService } from '../service/dandelion.service';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  query: string;
  language: string;
  sentimentAnalysis: SentimentAnalysisData = { timestamp: '', time: 0, lang: '', sentiment: { score: 0, type: '' } };

  constructor(private dandelionService: DandelionService) {
    this.query = '';
    this.language = '';
  }

  ngOnInit(): void {

  }

  changeSentimentQuery(event: Event): void {
    this.query = (<HTMLInputElement>event.target).value;
  }

  changeLanguage(event: Event): void {
    this.language = (<HTMLInputElement>event.target).value;
  }

  getAnalysis(): void {
    if (this.query === '' || this.language === '')
      return;

    let apiQuery = `?lang=${this.language}&text=${this.query}&token=b0768efbc8914759bf0152cffc6ac473`;

    this.dandelionService.getSentimentAnalysis(apiQuery).subscribe((sentimentAnalysis) => {
      this.sentimentAnalysis = sentimentAnalysis;

      console.log(sentimentAnalysis);
    });
  }


}
