import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Movie} from './movie.model';

@Injectable()
export class MoviesService {
  private url:string = 'https://ws-project1.herokuapp.com/';
  private movies: Movie[];
  constructor (private http: Http) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get(`${this.url}getAllComingSoon`)
      .map(this.extractData)
      .catch(this.handleError);
  }
  getMovieDataFilter(_year,_cat): Observable<Movie[]> {
    return this.http.get(`${this.url}getMovieDataFilter/${_year}/${_cat}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getMovieDataById(_id){
    return this.http.post(`${this.url}getMovieDataById`,{movieId:_id})
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
