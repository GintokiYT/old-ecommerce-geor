import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';

@Component({
  selector: 'app-manage-user-information',
  templateUrl: './manage-user-information.component.html',
  styleUrls: ['./manage-user-information.component.scss'],
})
export class ManageUserInformationComponent extends ViewComponent implements OnInit {

  constructor(private _injector: Injector) {
      super(_injector);
  }

  ngOnInit() {}


  onGoToConfiguration(){
    this.navigation.forward('customer/settings/main-settings');
  }

  async getOrTakePicture(){

    const image = await Camera.getPhoto({
      // quality: 90,
      // allowEditing: true,
      // resultType: CameraResultType.Uri
      quality: 90,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Uri
    });
  }

}
