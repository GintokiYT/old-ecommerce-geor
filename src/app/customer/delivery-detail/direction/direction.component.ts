import { Component, Input, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss'],
})
export class DirectionComponent extends ViewComponent implements OnInit {
/*
  oneTrue : boolean = true;

  @Input()
  title: string = ""

  data: any[] = [
    {
      id:1,
      selected: true,
      direction: "Jr. Samaritanos 879 Miraflores, Lima, Perú"
    },
    {
      id:2,
      selected: false,
      direction: "Jr. Enrique Segobiano 879 Miraflores, Lima, Perú"
    }
  ]


  constructor(private location: Location,
    private cpService: ConfirmOrderService,
    _injector: Injector) {
      super(_injector)
  }

  ngOnInit() { }

  goBack() {
    this.location.back();
  }

 /*  alert_message(){
    this.message.confirm('¿Seguro que quieres eliminar esta dirección?','',(confirmation)=>{
       },'Eliminar','Cancelar')
  } */
  /* deleteDirection(eliminar:boolean):void{
    if(eliminar){
      console.log(eliminar)
      const trues = this.data.filter(bill => bill.selected===true);
      if(trues.length>0){
        this.data = this.data.filter( bill => bill.id!==trues[0].id );
      }
      this.oneTrue = false;
    }
  }

  checkBoxSelect(direction: string) {
    const indexOtherCheck = this.data.findIndex(element => element.direction !== direction);
    this.data[indexOtherCheck].selected = false;
  }

  establecerDireccion() {
    const selected = this.data.filter(element => element.selected === true);
    if (selected[0]) {
      this.cpService.setDirectionHome(selected[0].direction)
    }
    this.navigation.back("/customer/confirm-order");
  }
  handlerMessage = '';
  roleMessage = ''; */

  oneTrue : boolean = true;


  bills : any[] = [
    {
      id:1,
      name: "Jr. Samaritanos 879 Miraflores, Lima, Perú",
      selected: true
    },
    {
      id:2,
      name: "Jr. Enrique Segobiano 879 Miraflores, Lima, Perú",
      selected: false
    },

  ]

  constructor(private cpService: ConfirmOrderService,
    private _injector: Injector,private router:Router) {
      super(_injector)
     }

  ngOnInit() {}

  checkBoxChange(id:number){
    const falses = this.bills.filter( bill => bill.id!==id);
    const trues = this.bills.filter(bill => bill.selected===true);
    falses.forEach( bill => bill.selected = false );
    this.oneTrue = (trues.length>0) ? true : false;
  }

  establecerDirection(){
     const selected = this.bills.filter(element => element.selected === true);
    if (selected[0]) {
      this.cpService.setDirectionHome(selected[0].name)
    }
    this.navigation.back("/customer/confirm-order");
  }

  goLocation(){
    const currentRouter = this.router.url;
  if(currentRouter === '/customer/collaborative-team/contact-search') {
    return this.navigation.forward('/customer/collaborative-team/team')
  }
  this.navigation.forward('/account/welcome/my-location');
  /* this.navigation.forward('/customer/contact-search'); */
  }


  /* handlerMessage = '';
    roleMessage = ''; */




  deleteBill(eliminar:boolean):void{
    if(eliminar){
      console.log(eliminar)
      const trues = this.bills.filter(bill => bill.selected===true);
      if(trues.length>0){
        this.bills = this.bills.filter( bill => bill.id!==trues[0].id );
      }
      this.oneTrue = false;
    }
  }




}

