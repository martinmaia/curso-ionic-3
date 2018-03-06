import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    MovieProvider
  ]
})
export class HomePage {

  public proximos_filmes;
  public loader;
  public refresher;
  public isResfreshing: boolean = false;

  constructor(
    public navCtrl: NavController,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {

  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isResfreshing = true;
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.getUpcomingMovies();
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
    });
    this.loader.present();
  }

  fecharCarregando() {
    this.loader.dismiss();
  }

  abrirDetalhes(idMovie) {
    this.navCtrl.push(FilmeDetalhesPage, { id: idMovie });
  }

  getUpcomingMovies() {

    this.abreCarregando();

    this.movieProvider.getUpcomingMovies().subscribe(
      data => {
        const objeto_retorno = JSON.parse((data as any)._body);
        this.proximos_filmes = objeto_retorno.results;
        this.fecharCarregando();
      }, error => {
        this.fecharCarregando();
      }
    );

    if (this.isResfreshing) {
      this.refresher.complete();
      this.refresher = false;
    }

  }

}
