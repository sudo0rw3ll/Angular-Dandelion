import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ExtractedEntity } from '../model';


@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  private readonly apiUrl = environment.dandelionApi;

  constructor(private httpClient: HttpClient) { }

  getExtractedEntities(query: string): Observable<ExtractedEntity> {
    return this.httpClient.get<ExtractedEntity>(`${this.apiUrl}/?text=${query}`)
  }
}
