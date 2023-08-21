import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferRideComponent } from './offer-ride/offer-ride.component';

const routes: Routes = [
  { path: 'offer-ride', component: OfferRideComponent },
  { path: '', component: OfferRideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
