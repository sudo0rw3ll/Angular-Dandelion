import { Component, OnInit } from '@angular/core';
import { LanguageDetectionData } from '../model';
import { DandelionService } from '../service/dandelion.service';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string;
  cleanData: boolean;

  detectedLanguage: LanguageDetectionData = { timestamp: '', time: 0, text: '', detectedLangs: [] };

  constructor(private dandelionService: DandelionService, private configService: ConfigService) {
    this.text = '';
    this.cleanData = false;
  }

  ngOnInit(): void {

  }

  getDetectedLangs() {
    if (this.text === '')
      return;

    let query = this.text;

    if (this.cleanData)
      query += '&clean=true'

    this.dandelionService.getDetectedLanguages(query, this.configService.getToken()).subscribe((detectedLanguage) => {
      this.detectedLanguage = detectedLanguage;

      for(let i=0; i < this.detectedLanguage.detectedLangs.length; i++){
        this.detectedLanguage.detectedLangs[i].confidence = Number((this.detectedLanguage.detectedLangs[i].confidence * 100).toFixed(2));
      }
      console.log(this.detectedLanguage);
    });
  }

  setQuery(event: Event): void {
    this.text = (<HTMLInputElement>event.target).value;
  }
}
