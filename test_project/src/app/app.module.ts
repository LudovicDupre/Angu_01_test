import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { FormsModule } from '@angular/forms';
import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { FormsComponent } from './components/forms/forms.component';
import { CustomerComponent } from './components/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CartComponentComponent,
    NotFoundComponentComponent,
    FormsComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
