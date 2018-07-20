import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { DonatePage } from '../pages/donate/donate'; 
import { JoinPage } from '../pages/join/join'; 
import { AccountPage } from '../pages/account/account';
import { CityPage } from '../pages/city/city';
import { CreateaccountPage } from '../pages/createaccount/createaccount';
import { FindcitePage } from '../pages/findcite/findcite';
import { LocalityPage } from '../pages/locality/locality';
import { LoginPage } from '../pages/login/login';
import { PostcitePage } from '../pages/postcite/postcite';
import { PostroomPage } from '../pages/postroom/postroom';
import { SearchcityPage } from '../pages/searchcity/searchcity';
import { SearchlocalityPage } from '../pages/searchlocality/searchlocality';
import { SearchuniversityPage } from '../pages/searchuniversity/searchuniversity';
import { UniversityPage } from '../pages/university/university';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  
  homePage() {
    this.nav.setRoot(HomePage);
  }

  aboutPage(){
    this.nav.setRoot(AboutPage);
  }

  donatePage(){
    this.nav.setRoot(DonatePage);
  }

  joinPage(){
    this.nav.setRoot(JoinPage);
  }
  
  searchcityPage(){
	  this.nav.setRoot(SearchcityPage);
  }
  
  searchlocalityPage(){
	  this.nav.setRoot(SearchlocalityPage);
  }
  
  searchuniversityPage(){
	  this.nav.setRoot(SearchuniversityPage);
  }
  
  postroomPage(){
	  this.nav.setRoot(PostroomPage);
  }
  
  postcitePage(){
	  this.nav.push(PostcitePage);
  }
  
  accountPage(){
	  this.nav.push(AccountPage);
  }
  
  cityPage(){
	  this.nav.push(CityPage);
  }
  
  createaccountPage(){
	  this.nav.push(CreateaccountPage);
  }
  
  findcitePage(){
	  this.nav.push(FindcitePage);
  }
  
  localityPage(){
	  this.nav.push(LocalityPage);
  }
  
  loginPage(){
	  this.nav.push(LoginPage);
  }
  
  universityPage(){
	  this.nav.push(UniversityPage);
  }
  
  

  

//  storeproductsPage(){
  //  this.nav.push(StoreproductsPage);
  //}

}
