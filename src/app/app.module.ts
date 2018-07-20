import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    DonatePage,
    JoinPage,
	AccountPage,
	CityPage,
	CreateaccountPage,
	FindcitePage,
	LocalityPage,
	LoginPage,
	PostcitePage,
	PostroomPage,
	SearchcityPage,
	SearchlocalityPage,
	SearchuniversityPage,
	UniversityPage,
	

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    DonatePage,
    JoinPage,
	AccountPage,
	CityPage,
	CreateaccountPage,
	FindcitePage,
	LocalityPage,
	LoginPage,
	PostcitePage,
	PostroomPage,
	SearchcityPage,
	SearchlocalityPage,
	SearchuniversityPage,
	UniversityPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
