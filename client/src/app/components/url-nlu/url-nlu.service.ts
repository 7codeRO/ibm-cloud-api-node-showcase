import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiService } from "../../core/services/api.service";

@Injectable()
export class UrlNluService {

  constructor(private http: HttpClient, private apiService: ApiService) {

  }

  getUrl(url): Observable<any> {
    return this.apiService.post('/getUrlCategory', {
      url: url
    });
  }
}
