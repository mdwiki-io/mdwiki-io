import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap-compact-theme',
  templateUrl: './bootstrap-compact-theme.component.html',
  styleUrls: ['./bootstrap-compact-theme.component.css']
})
export class BootstrapCompactThemeComponent implements OnInit {

  @Input() configJson;
  @Input() menu_items;

project_title = this.configJson.project_title;

  constructor() { }

  ngOnInit() {
  }

}
