import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';

const routes: Routes = [
  {
    path: '',
    component: EntityExtractionComponent
  },
  {
    path: "textSimilarity",
    component: TextSimilarityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
