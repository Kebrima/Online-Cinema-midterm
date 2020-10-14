import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComentsComponent } from './components/coments/coments.component';
import { NewsComponent } from './components/news/news.component';

import {RouterModule, Routes} from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { DaysPipe } from './components/pipes/days.pipe';
import { ViewmovieComponent } from './components/viewmovie/viewmovie.component';
import { LoginComponent } from './components/registration/login/login.component';
import { RegisterComponent } from './components/registration/register/register.component';
import { RestoreaccountComponent } from './components/registration/restoreaccount/restoreaccount.component';
import { LikesComponent } from './components/likes/likes.component';

const appRoutes: Routes = [
  {path: '', component: MaincontentComponent},
  {path: 'news', component: NewsComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'viewmovie', component: ViewmovieComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reg', component: RegisterComponent},
  {path: 'restore', component: RestoreaccountComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent,
    FooterComponent,
    ComentsComponent,
    NewsComponent,
    AboutusComponent,
    DaysPipe,
    ViewmovieComponent,
    LoginComponent,
    RegisterComponent,
    RestoreaccountComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
