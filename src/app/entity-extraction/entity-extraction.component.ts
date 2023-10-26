import { Component, OnInit } from '@angular/core';
import { DandelionService } from '../service/dandelion.service';
import { ExtractedEntity } from '../model';
import { ConfigService } from '../service/config.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  textQuery: string;
  extractedEntity: ExtractedEntity = { timestamp: '', time: 0, lang: '', annotations: [] };
  isImage: boolean;
  isAbstract: boolean;
  isCategories: boolean;
  includesPart: Array<string>;
  sliderValue: number;

  constructor(private dandelionService: DandelionService,
    private configService: ConfigService,
    private loggerService: LoggerService) {
    this.textQuery = '';
    this.isImage = false;
    this.isAbstract = false;
    this.isCategories = false;
    this.includesPart = [];
    this.sliderValue = 0.5;
  }

  ngOnInit(): void {
    console.log(this.configService.getToken());
  }

  changeQuery(event: Event): void {
    this.textQuery = (<HTMLInputElement>event.target).value;
    console.log(this.textQuery);
  }

  getEntities() {
    let query = this.prepareQuery();

    if (query === '')
      return;

    this.dandelionService.getExtractedEntities(query).subscribe((extractedEntity) => {
      this.extractedEntity = extractedEntity;

      console.log(this.extractedEntity);

      this.loggerService.info({ timestamp: Date.now(), endpoint: `${this.dandelionService.getDandelionApiEndpoint()}/nex/v1/?text=${query}`, method: 'GET' });
    });
  }

  prepareQuery() {
    if (!this.textQuery) {
      return '';
    }

    let query = this.textQuery;

    if (this.isImage) {
      if (!this.includesPart.includes('image'))
        this.includesPart.push('image');
    } else {
      const index = this.includesPart.indexOf('image', 0);
      if (index > -1)
        this.includesPart.splice(index, 1);
    }

    if (this.isAbstract) {
      if (!this.includesPart.includes('abstract'))
        this.includesPart.push('abstract');
    } else {
      const index = this.includesPart.indexOf('abstract', 0);
      if (index > -1)
        this.includesPart.splice(index, 1);
    }

    if (this.isCategories) {
      if (!this.includesPart.includes('categories'))
        this.includesPart.push('categories');
    } else {
      const index = this.includesPart.indexOf('categories', 0);
      if (index > -1)
        this.includesPart.splice(index, 1);
    }

    if (this.includesPart.length != 0) {
      query += "&include="
      for (let part of this.includesPart) {
        query += part + ',';
      }
    }

    if (query.endsWith(','))
      query = query.slice(0, -1) + '';

    if (this.sliderValue > 0)
      query += `&min_confidence=${this.sliderValue}`;

    query += `&token=${this.configService.getToken()}`;

    return query;
  }

  slide(event: Event): void {
    this.sliderValue = (<HTMLInputElement>event.target).valueAsNumber;
  }
}
