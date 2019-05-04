import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateURL: './app-main.component.html',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'client';
// }
//
//
// // slick
//
// @Component({
//
// })
// class ExampleComponent {

  slides = [
    {img: "assets/img/angelchickenpasta.jpg"},
    {img: "assets/img/bananabread.jpg"},
    {img: "assets/img/bananacreampie.jpg"},
    {img: "assets/img/chocolatemoussepie.jpg"},
    {img: "assets/img/creamofmushroomsoup.jpg"},
    {img: "assets/img/easycreamcheesedanish.jpg"},
    {img: "assets/img/easymeatloaf.jpg"},
    {img: "assets/img/famousporkchops.jpg"},
    {img: "assets/img/fluffypancakes.jpg"},
    {img: "assets/img/friedfish.jpg"},
    {img: "assets/img/lasagnaalfredorollups.jpg"},
    {img: "assets/img/rigatoniallagenovese.jpg"},
    {img: "assets/img/sausagepotatokalesoup.jpg"},
    {img: "assets/img/shrimpscampipasta.jpg"},
    {img: "assets/img/spanishgarlicshrimp.jpg"},
    {img: "assets/img/spinachandbaconquiche.jpg"},
    {img: "assets/img/springtimespaghetti.jpg"}
  ];

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true};

  addSlide() {
    this.slides.push({img: "assets/img/angelchickenpasta.jpg"}),
    this.slides.push({img: "assets/img/bananabread.jpg"}),
    this.slides.push({img: "assets/img/bananacreampie.jpg"}),
    this.slides.push({img: "assets/img/chocolatemoussepie.jpg"}),
    this.slides.push({img: "assets/img/creamofmushroomsoup.jpg"}),
    this.slides.push({img: "assets/img/easycreamcheesedanish.jpg"}),
    this.slides.push({img: "assets/img/easymeatloaf.jpg"}),
    this.slides.push({img: "assets/img/famousporkchops.jpg"}),
    this.slides.push({img: "assets/img/fluffypancakes.jpg"}),
    this.slides.push({img: "assets/img/friedfish.jpg"}),
    this.slides.push({img: "assets/img/lasagnaalfredorollups.jpg"}),
    this.slides.push({img: "assets/img/rigatoniallagenovese.jpg"}),
    this.slides.push({img: "assets/img/sausagepotatokalesoup.jpg"}),
    this.slides.push({img: "assets/img/shrimpscampipasta.jpg"}),
    this.slides.push({img: "assets/img/spanishgarlicshrimp.jpg"}),
    this.slides.push({img: "assets/img/spinachandbaconquiche.jpg"}),
    this.slides.push({img: "assets/img/springtimespaghetti.jpg"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
