import { Component, OnInit,EventEmitter } from '@angular/core';
import { MoviesService } from '../movies.service';
import {Movie} from '../movie.model';
import {NgForm} from '@angular/forms';
import {isUndefined} from 'util';

@Component({
  selector: 'app-movies-list-by-year-and-category',
  templateUrl: './movies-list-by-year-and-category.component.html',
  providers: [ MoviesService ],
  styleUrls: ['./movies-list-by-year-and-category.component.css']
})
export class MoviesListByYearAndCategoryComponent implements OnInit {
  errorMessage: string;
  movies: Movie[];
  year:string;
  cat:string;
  show:boolean=false;
  mode = 'Observable';

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getMovieDataFilter('2017','Comedy')
      .subscribe(
        movies => {
          this.movies = movies;
        },
        error =>  this.errorMessage = <any>error);
  }

  onSubmited(form:NgForm){

    this.year=form.value.yearInput;
    this.cat=form.value.catInput;

    this.movieService.getMovieDataFilter(this.year,this.cat)
      .subscribe(
        movies => {
          this.movies = movies;
          console.log(this.movies);
          if (isUndefined(this.movies[0])){
            this.show=false;
          }
          else{
            this.show=true;
          } },
        err=>{
          this.show=false;
          console.log("Error MSG:\n"+err)});

  }
}
