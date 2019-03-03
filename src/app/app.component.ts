import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


constructor(private http: HttpService){}

posts: any;

ngOnInit() {
  this.posts = this.http.getConfig();
  console.log("TEST LOGA", this.posts);
}


}
