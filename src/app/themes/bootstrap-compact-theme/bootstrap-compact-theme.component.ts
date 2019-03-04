import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-bootstrap-compact-theme',
  templateUrl: './bootstrap-compact-theme.component.html',
  styleUrls: ['./bootstrap-compact-theme.component.css']
})
export class BootstrapCompactThemeComponent implements OnChanges, OnInit {

  @Input() configJson;
  @Input() menu_items;

//project_title = this.configJson.project_title;
project_title = "manual";


  constructor() { }

  ngOnInit() {
    console.log("W compakcie:", this.configJson);
  }

  ngOnChanges(){
    this.project_title = this.configJson.config.project_title;
    console.log("TYTUL: ", this.configJson.config.project_title)
  }

}
