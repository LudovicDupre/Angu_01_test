import { Injectable } from '@angular/core';
import { Training } from '../models/training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cart : Training[]= [];
  
  addTraining(product :Training) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  constructor() { }
}
