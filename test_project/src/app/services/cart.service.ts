import { Injectable } from '@angular/core';
import { Training } from '../models/training.model';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Training[] = JSON.parse(localStorage.getItem("cart") || '[]');

  addTraining(product: Training): Training[] {
    this.cart.push(product);
    localStorage.setItem('', JSON.stringify(this.cart));
    return this.cart;
  }

  scanCart() {
    this.cart.forEach((p) => {
     // if(p.getQuantity() ==0) this.cart.delete(p.getId()));
    })
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify([]));
    return this.cart;
  }

  constructor() { }
}
