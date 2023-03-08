import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { AddressesService } from 'src/app/services/addresses.service';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-manage-addresses',
  templateUrl: './manage-addresses.component.html',
  styleUrls: ['./manage-addresses.component.scss'],
})
export class ManageAddressesComponent extends ViewComponent implements OnInit {


  directionsData : any[];

  constructor(private _injector: Injector, private ads:AddressesService,
    private rs: RouteService) {
    super(_injector)
    this.ads.currentAddressesData.subscribe( data => this.directionsData=data);

   }

  ngOnInit() {}

  goToManageUserInformation(){
    this.navigation.back("/customer/manage-user-information");
  }

  goToAddressesDelete(){
    this.navigation.forward("customer/manage-addresses/addresses-delete");
  }

  goToMap(){
    this.rs.setMyLocationLastBackDirection("/customer/manage-addresses");
    this.navigation.root("/account/welcome/my-location","forward");
  }

}
