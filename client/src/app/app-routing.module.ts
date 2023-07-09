import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { Page404Component } from './core/page404/page404.component';
import { UsedBooksComponent } from './core/used-books/used-books.component';
import { path } from './util/util';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/${path.home}`
  },
  {
    path: path.home,
    component: HomeComponent
  },
  {
    path: path.about,
    component: AboutComponent
  },
  {
    path: path.usedBook,
    component: UsedBooksComponent
  },
  {
    path: path.page404,
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
