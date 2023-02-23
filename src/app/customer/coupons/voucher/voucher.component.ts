import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss'],
})
export class VoucherComponent extends ViewComponent implements OnInit {

  constructor(private injector:Injector){
    super(injector) }

  ngOnInit() {}

  goTo(path: string){
    this.navigation.forward(path)
    console.log('ff')
  }

  goToAdd(){
    this.navigation.back("/customer/add")
  }
}
