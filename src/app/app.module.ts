import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxMdModule } from "ngx-md"; //ngx-md module
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ThemesComponent } from './themes/themes.component';
import { ClassicComponent } from './themes/classic/classic.component';
import { BootstrapCompactThemeComponent } from './themes/bootstrap-compact-theme/bootstrap-compact-theme.component';
import { PageComponent } from './page/page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BootstrapSimpleThemeComponent } from './themes/bootstrap-simple-theme/bootstrap-simple-theme.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, ThemesComponent, ClassicComponent, BootstrapCompactThemeComponent, PageComponent, PageNotFoundComponent, BootstrapSimpleThemeComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, NgxMdModule.forRoot(), HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
