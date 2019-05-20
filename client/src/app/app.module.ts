import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppMainComponent } from './app-main/app-main.component';

import { FavoritesComponent } from './favorites/favorites.component';
import { MenuModule } from './menu/menu.module';
import { CarouselComponent } from './carousel/carousel.component';

// import { PostCreateComponent } from './posts/post-create/post-create.component';
// import { PostListComponent } from './posts/post-list/post-list.component';
import { RegisterComponent } from './auth/signup/register.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    NavbarComponent,
    FavoritesComponent,
    CarouselComponent,
    // PostCreateComponent,
    // PostListComponent,
    RegisterComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule,
    MenuModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
