import { Component, OnInit } from '@angular/core';
import { ExtractedEntity, SimilarityData } from '../model';
import { DandelionService } from '../service/dandelion.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  query1: string;
  query2: string;

  similarityData: SimilarityData = { timestamp: '', time: 0, lang: '', langConfidence: 0, text1: '', text2: '', similarity: 0.0 };

  constructor(private dandelionService: DandelionService) {
    this.query1 = '';
    this.query2 = '';
  }

  ngOnInit(): void {
  }

  getSimilarity(): void {
    if (this.query1 === '' || this.query2 === '') {
      return;
    }

    this.dandelionService.getTextSimilarity(this.query1, this.query2).subscribe((similarityData) => {
      this.similarityData = similarityData;
      this.similarityData.similarity = Number((similarityData.similarity * 100).toFixed(2));

      console.log(this.similarityData.similarity * 100);
    });
  }

  changeQuery1(event: Event): void {
    this.query1 = (<HTMLInputElement>event.target).value;
  }

  changeQuery2(event: Event): void {
    this.query2 = (<HTMLInputElement>event.target).value;
  }

  // textQuery: string;
  // extractedEntity: ExtractedEntity = { timestamp: '', time: 0, lang: '', annotations: [] };

  // constructor(private dandelionService: DandelionService) {
  //   this.textQuery = '';
  // }

  // ngOnInit(): void {
  //   this.dandelionService.getExtractedEntities("?text=The%20doctor%20says%20an%20apple%20is%20better%20than%20an%20orange&include=image,types%2Cabstract%2Ccategories%2Clod&token=b0768efbc8914759bf0152cffc6ac473").subscribe((extractedEntity) => {
  //     this.extractedEntity = extractedEntity;
  //     console.log(this.extractedEntity);
  //   })
  // }
}
