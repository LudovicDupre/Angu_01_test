import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';

const routes: Routes = [
  { path: 'trainings', component: TrainingsComponent },
  { path: 'cart', component: CartComponentComponent },
  { path: '', redirectTo: 'trainings', pathMatch: 'full' },
  { path: '404', component: NotFoundComponentComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
