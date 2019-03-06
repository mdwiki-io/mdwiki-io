import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JsonConfig } from '../jsonConfig.interface';

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

@Input() private jsonData: JsonConfig;

  constructor(private route: ActivatedRoute) {
  }



  async ngOnInit() {

    try{
      this.config = JSON.parse(sessionStorage.getItem('mdconfig'));
      this.menu_items = this.config.menu.items;
    }catch(err){
      await delay(10);
      this.ngOnInit();
      return;
    }

    try{
      this.route.paramMap.subscribe((param: Params)=>{
        this.link = param.get('link');
        console.log("PARAM LINK: ", this.link);
        if (this.link == '') this.link='index';
          for (let item of this.menu_items) {
              if (this.link === item.link) {
                this.file = item.file;
              }
          }
      });
    }catch(err){}
  }

  ngOnChanges(){
    //this.ngOnInit();
  }

}


function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
