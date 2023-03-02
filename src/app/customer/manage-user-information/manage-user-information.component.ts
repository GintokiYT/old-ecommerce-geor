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

  modalIsVisible : boolean = false;


  constructor(private _injector: Injector) {
      super(_injector);
  }

  ngOnInit() {}


  onGoToConfiguration(){
    this.navigation.forward('customer/settings/main-settings');
  }

  async getOrTakePicture(){
    this.modalIsVisible = true;
    // const image = await Camera.getPhoto({
    //   // quality: 90,
    //   // allowEditing: true,
    //   // resultType: CameraResultType.Uri
    //   quality: 90,
    //   source: CameraSource.Prompt,
    //   resultType: CameraResultType.Uri
    // });
  }

  async closeModal(value:string){
    this.modalIsVisible = false;
    if(value==="prompt-camera"){
      console.log("Hola")
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

  goToCoupons(){
    this.navigation.root('/customer/start','forward');
  }

  goTeamCollaborative(){
   this.navigation.root('/customer/collaborative-team','forward');

  }

  goPageTeam() {
    this.navigation.forward('customer/collaborative-team');
  }

  // Ir a favoritos
  goToFavorites() {
    this.navigation.forward('customer/manage-favorites');
  }
}
