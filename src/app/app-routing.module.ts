import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: EntityExtractionComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard]
  },
  {
    path: 'textSimilarity',
    component: TextSimilarityComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard]
  },
  {
    path: 'languageDetection',
    component: LanguageDetectionComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard]
  },
  {
    path: 'sentimentAnalysis',
    component: SentimentAnalysisComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard]
  },
  {
    path: 'configuration',
    component: UserDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
