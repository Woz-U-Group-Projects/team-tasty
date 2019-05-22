import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
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
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatDialogModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
>>>>>>> origin/ashley

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AppMainComponent,
    NavbarComponent,
    FavoritesComponent,
    CarouselComponent,
    // PostCreateComponent,
    // PostListComponent,
    RegisterComponent,
    LoginComponent
=======
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    PostCreateComponent,
    PostListComponent,
    ErrorComponent
>>>>>>> origin/ashley
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    SlickCarouselModule,
    MenuModule
  ],

  providers: [],
  bootstrap: [AppComponent]
=======
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
>>>>>>> origin/ashley
})
export class AppModule { }
