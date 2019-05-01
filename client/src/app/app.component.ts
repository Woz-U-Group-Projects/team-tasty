import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
}


// slick

@Component({
  ...
})
class ExampleComponent {

  slides = [
    {img: "team-tasty/images/angelchickenpasta.jpg"},
    {img: "team-tasty/images/bananabread.jpg"},
    {img: "team-tasty/images/bananacreampie.jpg"},
    {img: "team-tasty/images/chocolatemoussepie.jpg"},
    {img: "team-tasty/images/creamofmushroomsoup.jpg"},
    {img: "team-tasty/images/easycreamcheesedanish.jpg"},
    {img: "team-tasty/images/easymeatloaf.jpg"},
    {img: "team-tasty/images/famousporkchops.jpg"},
    {img: "team-tasty/images/fluffypancakes.jpg"},
    {img: "team-tasty/images/friedfish.jpg"},
    {img: "team-tasty/images/lasagnaalfredorollups.jpg"},
    {img: "team-tasty/images/rigatoniallagenovese.jpg"},
    {img: "team-tasty/images/sausagepotatokalesoup.jpg"},
    {img: "team-tasty/images/shrimpscampipasta.jpg"},
    {img: "team-tasty/images/spanishgarlicshrimp.jpg"},
    {img: "team-tasty/images/spinachandbaconquiche.jpg"},
    {img: "team-tasty/images/springtimespaghetti.jpg"}
  ];
  slideConfig = {"slidesToShow": 17, "slidesToScroll": 17};

  addSlide() {
    this.slides.push({img: "team-tasty/images/angelchickenpasta.jpg"}),
    this.slides.push({img: "team-tasty/images/bananabread.jpg"}),
    this.slides.push({img: "team-tasty/images/bananacreampie.jpg"}),
    this.slides.push({img: "team-tasty/images/chocolatemoussepie.jpg"}),
    this.slides.push({img: "team-tasty/images/creamofmushroomsoup.jpg"}),
    this.slides.push({img: "team-tasty/images/easycreamcheesedanish.jpg"}),
    this.slides.push({img: "team-tasty/images/easymeatloaf.jpg"}),
    this.slides.push({img: "team-tasty/images/famousporkchops.jpg"}),
    this.slides.push({img: "team-tasty/images/fluffypancakes.jpg"}),
    this.slides.push({img: "team-tasty/images/friedfish.jpg"}),
    this.slides.push({img: "team-tasty/images/lasagnaalfredorollups.jpg"}),
    this.slides.push({img: "team-tasty/images/rigatoniallagenovese.jpg"}),
    this.slides.push({img: "team-tasty/images/sausagepotatokalesoup.jpg"}),
    this.slides.push({img: "team-tasty/images/shrimpscampipasta.jpg"}),
    this.slides.push({img: "team-tasty/images/spanishgarlicshrimp.jpg"}),
    this.slides.push({img: "team-tasty/images/spinachandbaconquiche.jpg"}),
    this.slides.push({img: "team-tasty/images/springtimespaghetti.jpg"})
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
