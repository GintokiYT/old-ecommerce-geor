import { Component, OnInit } from '@angular/core';
interface Details{
  description:string,
  detail_product:string,
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

detail:Details[]=[
{ description:'Cantidad:', detail_product:'1 pieza',},
{ description:'Marca:', detail_product:'Induacril cl',},
{ description:'Forma:', detail_product:'Cuadrada',},
{ description:'Material:', detail_product:'Policarbonato bañado en melamine',},
{ description:'Acabado:', detail_product:'Mate',},
{ description:'Familia:', detail_product:'Acrilicos y bicarbonatos',},
{ description:'SKU:', detail_product:'ACH0021',},];


}
