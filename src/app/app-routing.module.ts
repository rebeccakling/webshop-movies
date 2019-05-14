import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowmoviesComponent } from './showmovies/showmovies.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  //Detta blir min nya 'index' sida.
  { path: '', component: ShowmoviesComponent },
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
