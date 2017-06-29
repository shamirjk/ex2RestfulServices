import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesListByIdComponent } from './movies-list-by-id/movies-list-by-id.component';
import { MoviesListByYearAndCategoryComponent } from './movies-list-by-year-and-category/movies-list-by-year-and-category.component';
import { AppRoutingModule} from './app-routing.module';
import { HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MoviesListComponent,
    MoviesListByIdComponent,
    MoviesListByYearAndCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
