import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {MoviesListByIdComponent} from './movies-list-by-id/movies-list-by-id.component';
import {MoviesListByYearAndCategoryComponent} from'./movies-list-by-year-and-category/movies-list-by-year-and-category.component';

const appRoutes: Routes = [
    { path: '', redirectTo:'all-movies', pathMatch: 'full'},
    { path: 'all-movies', component: MoviesListComponent },
    { path: 'movies-by-id', component: MoviesListByIdComponent },
    { path: 'movies-list-by-id-and-category', component: MoviesListByYearAndCategoryComponent}
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
