import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { BillingDataService } from 'src/app/services/billing-data.service';

@Component({
  selector: 'app-manage-billing-data',
  templateUrl: './manage-billing-data.component.html',
  styleUrls: ['./manage-billing-data.component.scss'],
})
export class ManageBillingDataComponent extends ViewComponent implements OnInit {


  billingData : any[];

  constructor(private bds: BillingDataService, private _injector: Injector) { 
    super(_injector)
    this.bds.currentBillingData$.subscribe( (data) => this.billingData=data);
  }

  ngOnInit() {}


  goToManageUserInformation(){
    this.navigation.back("/customer/manage-user-information")
  }

  goToBillsDelete(){
    this.navigation.forward("/customer/manage-billing-data/bills-delete")
  }

  goToAddCompany(){
    this.navigation.forward(("/customer/manage-billing-data/add-company"))
  }

  goToEdit(){
    this.navigation.forward("/customer/manage-billing-data/add-company")
  }

}
