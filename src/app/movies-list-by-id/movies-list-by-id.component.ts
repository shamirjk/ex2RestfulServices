import { Component, OnInit,EventEmitter } from '@angular/core';
import { MoviesService } from '../movies.service';
import {Movie} from '../movie.model';
import {NgForm} from '@angular/forms';
import {isUndefined} from 'util';

@Component({
  selector: 'app-movies-list-by-id',
  templateUrl: './movies-list-by-id.component.html',
  providers: [ MoviesService ],
  styleUrls: ['./movies-list-by-id.component.css']
})
export class MoviesListByIdComponent implements OnInit {
  errorMessage: string;
  movies: Movie[];
  id:number;
  show:boolean=false;
  mode = 'Observable';

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getMovieDataById(1)
      .subscribe(
        movies => {
          this.movies = movies;
          console.log(this.movies);
        },
        error =>  this.errorMessage = <any>error);
  }

  onSubmited(form:NgForm){

    this.id=form.value.idInput;

    this.movieService.getMovieDataById(this.id)
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
