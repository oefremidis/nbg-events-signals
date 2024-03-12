import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductsArray():string[] {
    return [
      'Milk', 
      'Bread', 
      'Wine'
    ];
  }

  getProductsObjects():Product[] {
    return [
      {name: 'Milk', quantity: 2 }, 
      {name: 'Bread', quantity: 1 }, 
      {name: 'Wine', quantity: 1}
    ];
  }

}
