import { Component, ContentChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-input-password',
  templateUrl: 'input-password.component.html',
})
export class InputPasswordComponent {
  @ContentChild(IonInput) ionInput!: IonInput;
  inputPasswordType: string = 'password';

  constructor() {}

  onChangeType(): void {
    if (this.inputPasswordType === 'password') {
      this.inputPasswordType = 'text';
      this.ionInput.type = 'text';
    } else {
      this.inputPasswordType = 'password';
      this.ionInput.type = 'password';
    }
  }
}
