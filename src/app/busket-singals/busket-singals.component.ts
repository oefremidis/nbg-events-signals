import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-busket-singals',
  standalone: true,
  imports: [],
  templateUrl: './busket-singals.component.html',
  styleUrl: './busket-singals.component.css'
})
export class BusketSingalsComponent {

  price: number = 5;
    
  quantity = signal(10);
  
  totalPrice = computed(() => this.quantity() * this.price);

  constructor(){}


  increase():void {
    // this.quantity.set(50); // just set a new value
    this.quantity.set(this.quantity() + 1)
  }

  decrease(): void {
    this.quantity.update(value => value - 1)
  }

}
