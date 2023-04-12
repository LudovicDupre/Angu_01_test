import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Training } from 'src/app/training.model';

@Component({
  selector: 'app-not-found-component',
  templateUrl: './not-found-component.component.html',
  styleUrls: ['./not-found-component.component.css']
})
export class NotFoundComponentComponent implements OnInit {
  

constructor (private cartService : CartService, private router : Router) { }

ngOnInit(): void{ }

}
