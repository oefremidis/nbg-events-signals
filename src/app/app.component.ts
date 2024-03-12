import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusketComponent } from './busket/busket.component';
import { BusketSingalsComponent } from './busket-singals/busket-singals.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BusketComponent, BusketSingalsComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
