import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CestaColaborativaComponent } from './cesta/cesta-colaborativa/cesta-colaborativa.component';
import { EquiposComponent } from './cesta/equipos/equipos.component';
import { MiCestaComponent } from './cesta/mi-cesta/mi-cesta.component';
import { MainInboxComponent } from './inbox/main-inbox/main-inbox.component';
import { InternalInboxComponent } from './inbox/internal-inbox/internal-inbox.component';
import { TelefonoComponent } from './inbox/telefono/telefono.component';
import { DirectionComponent } from './delivery-detail/direction/direction.component';
import { DateComponent } from './delivery-detail/date/date.component';
import { ContactComponent } from './delivery-detail/contact/contact.component';
import { BuyComponent } from './delivery-detail/buy/buy.component';
import { DeliveryComponent } from './delivery-detail/delivery/delivery.component';
import { AlertComponent } from './delivery-detail/alert/alert.component';
import { StorePickupComponent } from './store-pickup/store-pickup.component';
import { StoreMapComponent } from './store-pickup/store-map/store-map.component';
import { StoresComponent } from './store-pickup/stores/stores.component';

import { ConfirmarPedidoComponent } from './confirmar-pedido/confirmar-pedido.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'cesta-colaborativa', component: CestaColaborativaComponent },
      { path: 'equipos', component: EquiposComponent },
      { path: 'mi-cesta', component: MiCestaComponent },
     /*  { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '**', redirectTo: 'home' }, */
      { path: 'main-inbox', component: MainInboxComponent },
      { path: 'internal-inbox/:id', component: InternalInboxComponent },
      { path: 'telefono', component: TelefonoComponent },
      { path: 'direction', component:DirectionComponent},
      { path: 'date', component:DateComponent},
      { path: 'contact', component:ContactComponent},
      { path: 'buy', component:BuyComponent},
      { path: 'delivery', component:DeliveryComponent},
      { path: 'alert', component:AlertComponent},
      { path: 'store-pickup', component:StorePickupComponent },
      { path: 'store-map', component:StoreMapComponent },
      { path: 'stores', component:StoresComponent },
      { path: 'confirmar-pedido', component: ConfirmarPedidoComponent },
      { path: '', pathMatch: 'full', redirectTo: 'main-inbox' },
      { path: '**', redirectTo: 'main-inbox' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
