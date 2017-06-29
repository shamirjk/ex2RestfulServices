import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import {Movie} from '../movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  providers: [ MoviesService ],
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {
  errorMessage: string;
  movies: Movie[];
  mode = 'Observable';

  constructor (private movieService: MoviesService) {}

  ngOnInit() { this.getMovies(); }

  getMovies() {
    this.movieService.getMovies()
      .subscribe(
        movies => {
          this.movies = movies;
          console.log(this.movies);
        },
        error =>  this.errorMessage = <any>error);
  }
}
