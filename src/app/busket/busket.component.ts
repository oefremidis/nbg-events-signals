import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-busket',
  standalone: true,
  imports: [],
  templateUrl: './busket.component.html',
  styleUrl: './busket.component.css'
})
export class BusketComponent implements OnInit {

  price: number = 5;

  quantity: number = 10;
  totalPrice: number = 0;

  imgPath:string = 'assets/images/2.jpg';


  constructor(){
    console.log('constructor');
    // this.totalPrice = this.quantity * this.price;
  }


  ngOnInit():void {
    console.log('OnInit');
    this.totalPrice = this.quantity * this.price;
  }
  
  increase(): void {
    this.quantity++;
    this.totalPrice = this.totalPrice + this.price;
  }

  decrease(): void {
    this.quantity--;
    this.totalPrice -= this.price;
  }

}
