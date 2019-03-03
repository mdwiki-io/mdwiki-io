import { Component, OnInit } from '@angular/core';
// import Menu from '../data/menu.json';
// import { HttpService } from './http.service.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mdwiki-io';


  constructor(private http: HttpService) {}


ngOnInit(){
  //console.log(this.http.getConfig());
}



}
