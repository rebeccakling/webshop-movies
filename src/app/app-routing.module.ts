import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowmoviesComponent } from './showmovies/showmovies.component';

const routes: Routes = [
  //Detta blir min nya 'index' sida.
  { path: '', component: ShowmoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
