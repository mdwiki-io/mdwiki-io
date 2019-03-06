import { Component, OnInit, Input, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { JsonConfig, Config, Menu, Item } from './../../jsonConfig.interface';

@Component({
  selector: 'app-bootstrap-compact-theme',
  templateUrl: './bootstrap-compact-theme.component.html',
  styleUrls: ['./bootstrap-compact-theme.component.css']
})
export class BootstrapCompactThemeComponent implements DoCheck, OnChanges, OnInit {

  project_title: any;
  menu_items: Array<Item>;
  config: Config;
  menu: Menu;


  // @Input() configJson;

  @Input() private jsonData: JsonConfig;

//project_title = this.configJson.project_title;



  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(_changes: SimpleChanges){

    try{
      this.config = this.jsonData.config;
      this.menu = this.jsonData.menu;
      console.log("CONFIG: ", this.jsonData.config);
      console.log("MENU: ", this.jsonData.menu);
      this.project_title = this.config.project_title;
      this.menu_items = this.jsonData.menu.items;
    }catch(err){
      ignoreErrors(err);
    }


  }

  ngDoCheck(){

  }

}

function ignoreErrors(err){}
