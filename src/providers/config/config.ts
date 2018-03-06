import { Injectable } from '@angular/core';

let KEY_CONFIG = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor() {

  }

  getConfigData(): any {
    return localStorage.getItem(KEY_CONFIG);
  }

  setConfigData(showSlide?: boolean, name?: string, username?: string) {
    
    let config = {
      showSlide: false,
      name: "",
      username: ""
    }

    if(showSlide){
      config.showSlide = showSlide;
    }
    if(name){
      config.name = name;
    }
    if(username){
      config.username = username;
    }

    localStorage.setItem(KEY_CONFIG, JSON.stringify(config));

  }

}
