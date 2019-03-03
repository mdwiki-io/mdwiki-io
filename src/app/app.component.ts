import { Component } from '@angular/core';
import Menu from '../data/menu.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mdwiki-io';


  constructor() {
   console.log('Reading local json files');
   console.log(Menu);
  }

}
