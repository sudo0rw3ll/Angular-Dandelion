import { Component, OnInit } from '@angular/core';
import { ExtractedEntity } from '../model';
import { DandelionService } from '../service/dandelion.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent {

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
