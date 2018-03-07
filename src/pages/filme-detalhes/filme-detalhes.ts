import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [
    MovieProvider
  ]
})
export class FilmeDetalhesPage {

  public detalhes_filme;
  public loader;
  public idMovie;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidEnter() {
    this.idMovie = this.navParams.get("id");
    this.getMovieDetails(this.idMovie);
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando detalhes...",
    });
    this.loader.present();
  }

  fecharCarregando() {
    this.loader.dismiss();
  }

  getMovieDetails(idMovie) {
    this.abreCarregando();
    this.movieProvider.getMovieDetails(idMovie).subscribe(
      data => {
        const objeto_retorno = JSON.parse((data as any)._body);
        this.detalhes_filme = objeto_retorno;
        this.fecharCarregando();
      }, error => {
        this.fecharCarregando();
      }
    );
  }

}
