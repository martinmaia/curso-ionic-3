import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Http } from '@angular/http';
import { ApiKeyClass } from '../../app/api.key';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private apiKey: any;
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    
  }

  public getPopularMovies() {
    this.getApiKey();
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.apiKey +
      "&language=pt-BR");
  }

  public getUpcomingMovies() {
    this.getApiKey();
    return this.http.get(this.baseApiPath + "/movie/upcoming?api_key=" + this.apiKey +
      "&language=pt-BR");
  }

  public getMovieDetails(idMovie) {
    this.getApiKey();
    return this.http.get(this.baseApiPath + "/movie/"+ idMovie +"?api_key=" + this.apiKey +
      "&language=pt-BR");
  }

  private getApiKey() {
    this.apiKey = ApiKeyClass.apiKey;
  }

}
