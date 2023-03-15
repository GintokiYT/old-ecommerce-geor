import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.scss'],
})
export class ManageOrderComponent extends ViewComponent implements OnInit {

  modalIsVisible: boolean = false;
  filter: string = "TODO";


  ordersData : any[];

  ordersResults : any[];


  constructor(private _injector: Injector, private os: OrdersService) {
    super(_injector)
    this.os.currentOrdersData$.subscribe( d => this.ordersData = d);
    this.ordersResults = [...this.ordersData];
   }

  ngOnInit() {}

  goBack(){
    this.navigation.back("/customer/manage-user-information")
  }

  goToOrderDetail(id:string){

    this.navigation.root(`/customer/manage-order/order-detail/${id}`,"forward")
  }

  openModal(){
    this.modalIsVisible = true;
  }

  closeModal(){
    this.modalIsVisible = false;
  }

  showOrdersWithFilter(type: string){

    this.filter = type;
    
    if(this.filter==="TODO"){
      this.ordersResults = [...this.ordersData];
    }else{
      this.ordersResults = this.ordersData.filter( o => o.state===this.filter);
    }

  }

}
