import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';

const routes: Routes = [
  {
    path: '',
    component: EntityExtractionComponent
  },
  {
    path: 'textSimilarity',
    component: TextSimilarityComponent
  },
  {
    path: 'languageDetection',
    component: LanguageDetectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
