import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    MovieProvider
  ]
})
export class HomePage {

  public proximos_filmes;

  constructor(
    public navCtrl: NavController,
    private movieProvider: MovieProvider
  ) {

  }

  ionViewDidLoad() {

    this.movieProvider.getUpcomingMovies().subscribe(
      data => {
        const objeto_retorno = JSON.parse((data as any)._body);
        this.proximos_filmes = objeto_retorno.results;
      }, error => {
        console.log(error);
      }
    );

  }

}
