import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'alert.component.html',
})
export class AlertComponent {
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '“Induacril” quiere acceder a tus contactos',
      message: "Al otorgar acceso, podrás ver tus contactos.",
      buttons: [
        {
          text: 'No permitir',
          role: 'cancel',
        },
        {
          text: 'Permitir',
          role: 'confirm',
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
}