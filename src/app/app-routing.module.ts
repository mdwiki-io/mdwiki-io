import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: ':link', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
