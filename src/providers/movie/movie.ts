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

  private apiKey;
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  public getLastestMovies() {
    this.getApiKey();
    return this.http.get(this.baseApiPath + "/movie/latest?api_key=" + this.apiKey);
  }

  private getApiKey(){
    this.apiKey = ApiKeyClass.apiKey;
  }

}
