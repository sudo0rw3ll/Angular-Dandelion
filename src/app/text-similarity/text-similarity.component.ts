import { Component, OnInit } from '@angular/core';
import { ExtractedEntity, SimilarityData } from '../model';
import { DandelionService } from '../service/dandelion.service';
import { ConfigService } from '../service/config.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  query1: string;
  query2: string;

  similarityData: SimilarityData = { timestamp: '', time: 0, lang: '', langConfidence: 0, text1: '', text2: '', similarity: 0.0 };

  constructor(private dandelionService: DandelionService,
    private configService: ConfigService,
    private loggerService: LoggerService) {
    this.query1 = '';
    this.query2 = '';
  }

  ngOnInit(): void {
  }

  getSimilarity(): void {
    if (this.query1 === '' || this.query2 === '') {
      return;
    }

    this.dandelionService.getTextSimilarity(this.query1, this.query2, this.configService.getToken()).subscribe((similarityData) => {
      this.similarityData = similarityData;
      this.similarityData.similarity = Number((similarityData.similarity * 100).toFixed(2));

      console.log(this.similarityData.similarity * 100);
    });

    this.loggerService.info({ timestamp: Date.now(), endpoint: `${this.dandelionService.getDandelionApiEndpoint()}/sim/v1/?text1=${this.query1}&text2=${this.query2}&token=${localStorage.getItem('userToken')}/`, method: 'GET' });
  }

  changeQuery1(event: Event): void {
    this.query1 = (<HTMLInputElement>event.target).value;
  }

  changeQuery2(event: Event): void {
    this.query2 = (<HTMLInputElement>event.target).value;
  }
}
