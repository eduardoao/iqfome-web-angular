import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showprodutcs',
  templateUrl: './showprodutcs.component.html',
  styleUrls: ['./showprodutcs.component.css']
})
export class ShowprodutcsComponent implements OnInit {

  productsTest = {
    name :'Crab Pool Security-1 test',
    price: '$40.00',
    imagem: '../assets/img/featured/feature-8.jpg',
    heart: '/about',
    retweet: '/about',
    cart: '/about'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
