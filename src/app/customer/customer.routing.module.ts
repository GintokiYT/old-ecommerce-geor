import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { MainInboxComponent } from './inbox/main-inbox/main-inbox.component';
import { InternalInboxComponent } from './inbox/internal-inbox/internal-inbox.component';
import { TelefonoComponent } from './inbox/telefono/telefono.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'main-inbox', component: MainInboxComponent },
      { path: 'internal-inbox/:id', component: InternalInboxComponent },
      { path: 'telefono', component: TelefonoComponent },
      { path: '', pathMatch: 'full', redirectTo: 'main-inbox' },
      { path: '**', redirectTo: 'main-inbox' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
