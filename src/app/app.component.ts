import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { AuthService } from './auth/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  showLogin = true;

  constructor(private http: HttpService, private auth: AuthService) {
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
    this.showLogin = !this.auth.isLoggedIn();
  }

  onLoggedIn() {
    this.showLogin = false;
  }
}
