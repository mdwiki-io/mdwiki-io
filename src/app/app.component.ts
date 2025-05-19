import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = 'mdwiki';
  constructor(private http: HttpService) {
    this.http
      .getConfig()
      .toPromise()
      .then(data => {
        sessionStorage.setItem('mdconfig', JSON.stringify(data));
        this.jsonData = data;
      });
  }

  jsonData: any;

  ngOnInit() {


  }
}
