import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

interface Colours{
  images:string,
  name:string,
  quantify:number
}

interface Measurements{
  sizes:string
}

interface Thickness{
  number:number
}

@Component({
  selector: 'app-variants-product',
  templateUrl: './variants-product.component.html',
  styleUrls: ['./variants-product.component.scss'],
})
export class VariantsProductComponent extends ViewComponent implements OnInit {

  constructor(_injector:Injector) {
    super(_injector)
  }

  ngOnInit() {}
  colour:Colours[]=[
    {  images:'/assets/images/azul.png', name:'Azul', quantify: 5},
    {  images:'/assets/images/morado.png',name:'Morado',quantify: 0},
    {  images:'/assets/images/verde.png', name:'Verde jade',quantify: 5 },
    {  images:'/assets/images/azul.png',  name:'Azul',quantify: 0},
    {  images:'/assets/images/azul.png',  name:'Azul', quantify: 0 }];

  measurement:Measurements[]=[
    { sizes:'150x120'},
    { sizes:'100x110'},
    { sizes:'150x110'},
    { sizes:'200x240'}];

    thicknes:Thickness[]=[
    { number:2 },
    { number:4 },
    { number:8 },
  ];

  goBack(){
    this.navigation.root('/customer/collaborative-basket','back');
  }

}
