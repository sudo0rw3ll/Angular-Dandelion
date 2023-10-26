import { Component, OnInit } from '@angular/core';
import { SentimentAnalysisData } from '../model';
import { DandelionService } from '../service/dandelion.service';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  query: string;
  language: string;
  startColor: string;
  endColor: string;
  sentimentColor: string;
  sentimentAnalysis: SentimentAnalysisData = { timestamp: '', time: 0, lang: '', sentiment: { score: 0, type: '' } };

  constructor(private dandelionService: DandelionService, private configService: ConfigService) {
    this.query = '';
    this.language = '';
    this.startColor = '#FF0000';
    this.endColor = '#00FF00';
    this.sentimentColor = '';
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

    let apiQuery = `?lang=${this.language}&text=${this.query}&token=${this.configService.getToken()}`;

    this.dandelionService.getSentimentAnalysis(apiQuery).subscribe((sentimentAnalysis) => {
      this.sentimentAnalysis = sentimentAnalysis;

      console.log(sentimentAnalysis);
      this.sentimentColor = this.interpolateColors(this.sentimentAnalysis.sentiment.score);
    });
  }

  interpolateColors(offset: number): string {
    if (offset == 0) offset = 0.5;
    if (offset < 0) offset = 0;
    if (offset > 1) offset = 1;

    const parseColor = (color: string): [number, number, number] => {
      const hex = color.replace(/^#/, '').toLowerCase();

      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);

      return [r, g, b];
    };

    const color1Value = parseColor(this.startColor);
    const color2Value = parseColor(this.endColor);

    const interpolatedColor = color1Value.map((c1, index) => {
      const c2 = color2Value[index];
      const interpolatedValue = c1 + (c2 - c1) * offset;
      return Math.round(interpolatedValue);
    });

    return `#${interpolatedColor.map((c) => c.toString(16).padStart(2, '0')).join('')}`;
  }

}
