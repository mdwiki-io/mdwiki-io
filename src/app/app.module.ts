import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxMdModule } from "ngx-md"; //ngx-md module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ThemesComponent } from './themes/themes.component';
import { ClassicComponent } from './themes/classic/classic.component';
import { BootstrapCompaktThemeComponent } from './themes/bootstrap-compakt-theme/bootstrap-compakt-theme.component';
import { BootstrapCompactThemeComponent } from './themes/bootstrap-compact-theme/bootstrap-compact-theme.component';

@NgModule({
  declarations: [AppComponent, ThemesComponent, ClassicComponent, BootstrapCompaktThemeComponent, BootstrapCompactThemeComponent],
  imports: [BrowserModule, AppRoutingModule, NgxMdModule.forRoot(), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
