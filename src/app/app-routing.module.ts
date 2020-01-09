import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ShowmoviesComponent } from './showmovies/showmovies.component'
import { DetailsComponent } from './details/details.component'
import { CheckoutComponent } from './checkout/checkout.component'
import { AdminComponent } from './admin/admin.component'
import { ConfirmedComponent } from './confirmed/confirmed.component'
import { Error404Component } from './error404/error404.component'

const routes: Routes = [
  { path: '', component: ShowmoviesComponent }, //Detta blir min nya 'index' sida.
  { path: 'details/:id', component: DetailsComponent },
  { path: 'submit', component: CheckoutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'confirmed', component: ConfirmedComponent },
  { path: '**', component: Error404Component },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
