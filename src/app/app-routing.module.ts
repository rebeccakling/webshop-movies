import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowmoviesComponent } from './showmovies/showmovies.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  
  { path: '', component: ShowmoviesComponent },//Detta blir min nya 'index' sida.
  { path: 'details/:id', component: DetailsComponent },
  { path: 'submit', component: CheckoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
