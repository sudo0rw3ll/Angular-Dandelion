import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { HttpClientModule } from '@angular/common/http';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { FormsModule } from '@angular/forms';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TextSimilarityComponent,
    EntityExtractionComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
