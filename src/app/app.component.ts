import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private http: HttpService) {}

  posts: any;
  result: any;
  promiseResult: any;
  menu_items: any;

  ngOnInit() {

    //this.http.getConfig().subscribe(result => (this.result = result));

    this.http
      .getConfig()
      .toPromise()
      .then(data => {
        this.promiseResult = data;
        console.log("Promise resolved.", this.promiseResult);
        this.menu_items = this.promiseResult.config.menu.items;
      });
  }
}
