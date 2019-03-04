import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  @Input() configJson;
  @Input() menu_items;

  constructor() { }

  ngOnInit() {
  }

}
