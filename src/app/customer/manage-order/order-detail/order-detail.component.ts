import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewComponent } from '@geor360/ecore';
import { RouteService } from 'src/app/services/route.service';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent extends ViewComponent implements OnInit {

  directionArrow = "down";
  idOrder: string = "";
  orderData : any[];
  order: any;


  constructor(private _injector: Injector,
    private activatedRoute: ActivatedRoute,
    private ods: OrdersService,
    private rs: RouteService,
    private router: Router
    ) {
    super(_injector)
   }

  ngOnInit() {

    //obtener el id de los parametros
    this.activatedRoute.params
      .subscribe(({ id }) => {
        this.idOrder = id;
      })
    
    this.ods.currentOrdersData$.subscribe( d => this.orderData=d);
    this.order = this.orderData.filter( o => o.id===this.idOrder)[0];
    console.log(this.order.state);

  }

  onShowTextHelper(){
    
    if(this.directionArrow==="up"){
      this.directionArrow = "down"
    }else{
      this.directionArrow = "up";
    }

  }

  goToSend(){
    this.rs.setSetEnvioLastBackDirection(this.router.url);
    this.navigation.root("/customer/send","forward");
  }

  goToInbox(){
    this.navigation.root("customer/internal-inbox/1","forward");
  }

  goToMyBasket(){
    this.navigation.root("/customer/my-basket", "forward");
  }

  goToInstruccions(){
    this.navigation.root("/customer/manage-order/instructions","forward");
  }

}



