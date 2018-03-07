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
  public page = 1;
  public infiniteScroll;

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

  doInfinite(infiniteScroll) {

    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.getPopularMovies(true);

  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando populares...",
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

  getPopularMovies(newpage: boolean = false) {

    this.abreCarregando();

    this.movieProvider.getPopularMovies(this.page).subscribe(
      data => {
        const objeto_retorno = JSON.parse((data as any)._body);
        if (newpage) {
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
          this.infiniteScroll.complete();
        }
        else {
          this.lista_filmes = objeto_retorno.results;
        }
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
