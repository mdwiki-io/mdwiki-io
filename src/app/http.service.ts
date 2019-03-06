import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: "root"
})
export class HttpService {
  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8"
  });

  constructor(
    private http: HttpClient,
    private meta: Meta
  ) {}

  getConfig(): Observable<any> {
    return this.http.get(this.meta.getTag('name=mdwiki-io-config').content);
  }
}
