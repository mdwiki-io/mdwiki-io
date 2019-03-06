import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Menu } from '../jsonConfig.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnChanges, OnInit{
config: any;
link: any;
file: string;
menu_items: any;

  constructor(private route: ActivatedRoute) {
    this.config = JSON.parse(sessionStorage.getItem('mdconfig'));
    this.menu_items = this.config.menu.items;
  }



  ngOnInit() {
    try{
      this.route.paramMap.subscribe((param: Params)=>{
        this.link = param.get('link');
        this.file = 'index';
          for (let item of this.menu_items) {
              if (this.link === item.link) {
                this.file = item.file;
              }
          }
      });
    }catch(err){}
  }

  ngOnChanges(){}

}
