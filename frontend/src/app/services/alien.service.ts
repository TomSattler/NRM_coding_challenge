import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AlienService {

  private headers;
  
  /**
   *
   * @param http
   */
  constructor(private readonly http: HttpClient) {
    this.headers = new HttpHeaders({
      'x-api-key': environment.api.key
    });
   }

  /**
   *
   */
  getData(): Observable<any> {
    return this.http.get(environment.api.baseUrl+"/messages", {headers:this.headers});
  }

  /**
   *
   */
  sendData(data: any): Observable<any> {
    return this.http.post(environment.api.baseUrl+"/messages", data, {headers:this.headers,responseType: 'text'});
  }
}
