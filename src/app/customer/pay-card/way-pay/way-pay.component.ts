import { Component, OnInit, Injector, Input, Output, EventEmitter } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';
import IPayMethod from '../../../interfaces/IPayMethod';
import { PaymentMethodsService } from '../../../services/payment-methods.service';

@Component({
  selector: 'app-way-pay',
  templateUrl: './way-pay.component.html',
  styleUrls: ['./way-pay.component.scss'],
})
export class WayPayComponent extends ViewComponent implements OnInit {

  @Input()
  oneTrue: boolean;

  @Output()
  onOneTrue: EventEmitter<boolean> = new EventEmitter<any>();

  modalIsVisible: boolean = false;

  paymentData: any[];

  constructor(private _injector: Injector,
    private cpService: ConfirmOrderService,
    private pms: PaymentMethodsService) {
    super(_injector);
    this.pms.currentPaymentData.subscribe(data => this.paymentData = data);
  }

  ngOnInit() { }

  goTo(path: string) {
    this.navigation.forward(path)
  }

  checkBoxSelect(id: number) {
    const falses = this.paymentData.filter(element => element.id !== id);
    const trues = this.paymentData.filter(element => element.selected === true);
    falses.forEach(element => {
      element.selected = false;
    })
    if (trues.length > 0) {
      this.oneTrue = true;
      this.pms.setPaymentData(this.paymentData);
      this.onOneTrue.emit(this.oneTrue);
    } else {
      this.oneTrue = false;
      this.pms.setPaymentData(this.paymentData);
      this.onOneTrue.emit(this.oneTrue);
    }
  }

  establecerMetodoDePago() {
    const selected = this.paymentData.filter(element => element.selected === true);
    if (selected) {
      const method: IPayMethod = {
        type: selected[0].type,
        number: selected[0].number,
        icon: "/assets/icons/icon-visa-small.svg"
      }
      this.cpService.setPayMethod(method)
    }
    this.navigation.back("/customer/confirm-order");
  }


  delete(id) {
    this.message.confirm('¿Seguro que quieres eliminar la tarjeta?', '', (confirmation) => {
      if (confirmation) {
        this.paymentData = this.paymentData.filter( d => d.id!==id);
        const dataFormated = this.paymentData.map ( d => {
          const {id,selected,...cardFormated} = d;
          return cardFormated;
        })
        this.pms.setPaymentData(dataFormated);
      }
    }, 'Eliminar', 'Cancelar')
  }

  openModal() {
    this.modalIsVisible = true;
  }

  closeModal() {
    this.modalIsVisible = false;
  }
}

