import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';

import { FindcitePage } from '../findcite/findcite';
import { PostcitePage } from '../postcite/postcite';
import { SearchcityPage } from '../searchcity/searchcity';
import { SearchuniversityPage } from '../searchuniversity/searchuniversity';
import { SearchlocalityPage } from '../searchlocality/searchlocality';
import { AccountPage } from '../account/account';
import { JoinPage } from '../join/join';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
   slides = [
    {
      title: "",
      description: "",
      smalltext: "",
      image: "assets/imgs/slider-1.jpg",
    },
    {
      title: "Under XAF 699",
      description: "Customer Support & Services",
      smalltext: "Thank You WIngs Stores",
      image: "assets/imgs/slider-2.jpg",
    },
    {
      title: "",
      description: "",
      smalltext: "",
      image: "assets/imgs/slider-3.jpg",
    }
  ];
  


	
	findcitePage(){
		this.navCtrl.push(FindcitePage);
	}
	
	postcitePage(){
      this.navCtrl.push(PostcitePage);
    }
	
	searchcityPage(){
      this.navCtrl.push(SearchcityPage);
    }
    
	searchlocalityPage(){
      this.navCtrl.push(SearchlocalityPage);
    }
	
	searchuniversityPage(){
      this.navCtrl.push(SearchuniversityPage);
    }
	
	accountPage(){
      this.navCtrl.push(AccountPage);
    }
	
	joinPage(){
      this.navCtrl.push(JoinPage);
    }

}
