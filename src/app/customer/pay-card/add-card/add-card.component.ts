import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  
  isModalOpen = false;


  data={
    cardnumber:'',
    cardholder:'',
    expiration:'',
    code:'',
  }
  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  onSubmit(formulario:NgForm){ }

  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     buttons: ['X'],
  //     header: `<img src="/assets/icons/security-code.svg">`, 
  //     subHeader: 'Cod. de seguridad',
  //     message: 'Código de 3 dígitos ubicados en el dorso de la tarjeta',
      
  //   });

  //   await alert.present();
  // }
  
  

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
