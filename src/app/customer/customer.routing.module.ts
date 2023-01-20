import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StorePickupComponent } from './store-pickup/store-pickup.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '**', redirectTo: 'home' },
      { path: 'store-pickup', component:StorePickupComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
