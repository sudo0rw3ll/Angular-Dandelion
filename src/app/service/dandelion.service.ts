import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ExtractedEntity, LanguageDetectionData, SimilarityData } from '../model';


@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  private readonly apiUrl = environment.dandelionApi;

  constructor(private httpClient: HttpClient) { }

  getExtractedEntities(query: string): Observable<ExtractedEntity> {
    return this.httpClient.get<ExtractedEntity>(`${this.apiUrl}/nex/v1/?text=${query}`);
  }

  getTextSimilarity(text1: string, text2: string): Observable<SimilarityData> {
    return this.httpClient.get<SimilarityData>(`${this.apiUrl}/sim/v1/?text1=${text1}&text2=${text2}&token=b0768efbc8914759bf0152cffc6ac473`);
  }

  getDetectedLanguages(text: string): Observable<LanguageDetectionData> {
    return this.httpClient.get<LanguageDetectionData>(`${this.apiUrl}/li/v1/?text=${text}&token=b0768efbc8914759bf0152cffc6ac473`);
  }
}
