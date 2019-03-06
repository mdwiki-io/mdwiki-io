import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private http: HttpService) {}

  jsonData: any;

  ngOnInit() {

    this.http
      .getConfig()
      .toPromise()
      .then(data => {
        this.jsonData = data;
        console.log("Promise resolved.", this.jsonData);
        sessionStorage.setItem('mdconfig', JSON.stringify(this.jsonData));
      });
  }
}
