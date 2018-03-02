import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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

  public objeto_feed = {
    titulo: "Marty McFly",
    data: "01/03/2018",
    descricao: "Estou criando um App em Ionic 3",
    curtir: "340 curtidas",
    comentarios: "233 comentários",
    hora: "3h atrás"
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {

  }

  ionViewDidLoad() {

    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const objeto_retorno = JSON.parse((data as any)._body);
        this.lista_filmes = objeto_retorno.results;
      }, error => {
        console.log(error);
      }
    )
  }

}
