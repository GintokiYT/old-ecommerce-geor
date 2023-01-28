import { Component, OnInit } from '@angular/core';
interface Equipo{
  image:string,
  nombre:string,
  estado:[{
    estado:string,
    numero:string,
  }],

 }
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  equipos:Equipo[]=[
    {
      image:'assets/collaborative-basquet/Avatar.svg',
      nombre: 'Juliano del Carmen Soriano',
      estado:[{
        estado:"Pendiente",
        numero:"+51 971 945 234"
      }],

    },
    {
      image:'assets/collaborative-basquet/Avatar3.svg',
      nombre: 'Rolando Paredes Alvarado',
      estado:[{
        estado:"",
        numero:"+51 971 945 234"
      }],

    },
    {
      image:'assets/collaborative-basquet/Avatar3.svg',
      nombre: 'Nombre y apellidos',
      estado:[{
        estado:"Pendiente",
        numero:"+51 971 945 234"
      }],

    },
    {
      image:'assets/collaborative-basquet/Avatar2.svg',
      nombre: 'Nombre y apellidos',
      estado:[{
        estado:"",
        numero:"+51 971 945 234"
      }],

    },
    {
      image:'assets/collaborative-basquet/Avatar.svg',
      nombre: 'Juliano del Carmen Soriano',
      estado:[{
        estado:"Pendiente",
        numero:"+51 971 945 234"
      }],

    },




  ]

}
