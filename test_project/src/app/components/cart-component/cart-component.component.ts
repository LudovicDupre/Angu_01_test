import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Training } from 'src/app/models/training.model';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit{
  cart : Training [] | undefined;

constructor (private cartService : CartService, private router : Router) { }

ngOnInit(): void{
  this.cart = [];
}

}
