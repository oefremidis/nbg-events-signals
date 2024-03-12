import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  // products = ['Milk', 'Bread', 'Wine'];

  productsArray!: string[];
  productsObjects!: Product[];
  // Case 0
  // using objects
  // service = new ProductService();

  // Case 1
  // private service: ProductService;

  // constructor(service: ProductService) { // auto - from DI
  //   this.service = service;
  // }

  // Case 2 - same as Case 1
  // constructor(private service: ProductService){}

  // Case 3
  private service = inject(ProductService);
  // service = inject(ProductService)

  ngOnInit(): void {
    this.productsArray = this.service.getProductsArray();
    this.productsObjects = this.service.getProductsObjects();
  }


}
