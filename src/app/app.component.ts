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
  configJson: any;
  menu_items: any;

  ngOnInit() {

    //this.http.getConfig().subscribe(result => (this.result = result));

    this.http
      .getConfig()
      .toPromise()
      .then(data => {
        this.configJson = data;
        console.log("Promise resolved.", this.configJson);
        this.menu_items = this.configJson.config.menu.items;
      });
  }
}
