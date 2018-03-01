import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Marty McFly",
    data: "01/03/2018",
    descricao: "Estou criando um App em Ionic 3",
    curtir: "340 curtidas",
    comentarios: "233 comentários",
    hora: "3h atrás"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  private somaDoisNumeros(num1: number, num2: number): void{
    alert(num1 + num2);
  }

  ionViewDidLoad() {

    //this.somaDoisNumeros(5, 22);

  }

}
