import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ShowmoviesComponent } from './showmovies/showmovies.component'
import { HttpClientModule } from '@angular/common/http'
import { ProductpresentationComponent } from './productpresentation/productpresentation.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { DetailsComponent } from './details/details.component'
import { CheckoutComponent } from './checkout/checkout.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AdminComponent } from './admin/admin.component'
import { ConfirmedComponent } from './confirmed/confirmed.component'
import { Error404Component } from './error404/error404.component'

@NgModule({
  declarations: [
    AppComponent,
    ShowmoviesComponent,
    ProductpresentationComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    CheckoutComponent,
    AdminComponent,
    ConfirmedComponent,
    Error404Component,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
