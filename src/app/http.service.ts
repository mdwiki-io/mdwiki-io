import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})

  constructor(private http: HttpClient) { }

  getConfig(): Observable<any> {
    return this.http.get('https://raw.githubusercontent.com/mdwiki-io/mdwiki-io/master/docs/mdwiki-config.json');
  }

}
