import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { JsonConfig, Menu, Config, Item } from 'src/app/jsonConfig.interface';

@Component({
  selector: 'app-bootstrap-simple-theme',
  templateUrl: '../../../assets/bootstrap-simple.html',
  styleUrls: ['../../../assets/bootstrap-simple.css']
})
export class BootstrapSimpleThemeComponent implements OnInit {

  project_title: any;
  menu_items: Array<Item>;
  config: Config;
  menu: Menu;
  footer_file: string;
  header_file: string;


  // @Input() configJson;

  @Input() private jsonData: JsonConfig;

//project_title = this.configJson.project_title;



  constructor() {

  }

  ngOnInit() {}

  ngOnChanges(_changes: SimpleChanges){

    try{
      this.config = this.jsonData.config;
      this.menu = this.jsonData.menu;
      console.log("CONFIG: ", this.jsonData.config);
      console.log("MENU: ", this.jsonData.menu);
      this.project_title = this.config.project_title;
      this.menu_items = this.jsonData.menu.items;
      this.header_file = this.config.header_file;
      this.footer_file = this.config.footer_file;
    }catch(err){
      ignoreErrors(err);
    }


  }

  ngDoCheck(){

  }

}

function ignoreErrors(err){}
