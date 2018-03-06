import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public lista_filmes: Array<any>;
  private loader;
  public refresher;
  public isResfreshing: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {

  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isResfreshing = true;
    this.ionViewDidLoad();
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

  ionViewDidLoad() {
    this.getPopularMovies();
  }

  abrirDetalhes(idMovie) {
    this.navCtrl.push(FilmeDetalhesPage, { id: idMovie });
  }

  getPopularMovies() {

    this.abreCarregando();

    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const objeto_retorno = JSON.parse((data as any)._body);
        this.lista_filmes = objeto_retorno.results;
        this.fecharCarregando();
      }, error => {
        console.log(error);
        this.fecharCarregando();
      }
    );

    if (this.isResfreshing) {
      this.refresher.complete();
      this.refresher = false;
    }

  }

}
