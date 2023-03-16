import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

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
  previousRoute: string;
  constructor(private _injector:Injector,private location: Location,private router: Router) {

    super(_injector);
    this.previousRoute = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
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
    this.navigation.root(this.previousRoute,"back");
    /* this.navigation.root('/customer/collaborative-basket','back'); */
  }

  selectedLabel: number = null;

  selectLabel(index: number) {
    if (this.selectedLabel === index) {
      this.selectedLabel = null;
    } else {
      this.selectedLabel = index;
    }
  }

  selectedLabel2: number = null;

  selectLabel2(index: number) {
    if (this.selectedLabel2 === index) {
      this.selectedLabel2 = null;
    } else {
      this.selectedLabel2 = index;
    }
  }
  goBackCollaborative(){
    this.location.back();
  }
  /* deselectLabel(){
    this.selectLabel=null;
  } */

}
