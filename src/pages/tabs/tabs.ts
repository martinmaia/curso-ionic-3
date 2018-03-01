import { Component } from '@angular/core';

//import { HomePage } from '../home/home';
//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { FeedPage } from '../feed/feed';
import { IntroPage } from '../intro/intro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IntroPage;
  tab2Root = FeedPage;
  //tab3Root = ContactPage;
  //tab4Root = FeedPage;

  constructor() {

  }
}
