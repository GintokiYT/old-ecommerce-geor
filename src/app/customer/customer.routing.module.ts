import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CestaColaborativaComponent } from './cesta/cesta-colaborativa/cesta-colaborativa.component';

import { EquiposComponent } from './cesta/equipos/equipos.component';
import { MiCestaComponent } from './cesta/mi-cesta/mi-cesta.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'cesta-colaborativa', component: CestaColaborativaComponent },
      { path: 'equipos', component: EquiposComponent },
      { path: 'mi-cesta', component: MiCestaComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
