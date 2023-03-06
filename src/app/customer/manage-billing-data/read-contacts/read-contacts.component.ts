import { Component, OnInit, Injector } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-read-contacts',
  templateUrl: './read-contacts.component.html',
  styleUrls: ['./read-contacts.component.scss'],
})
export class ReadContactsComponent extends ViewComponent implements OnInit {


  contacts: any[];
  permission : any;
  showButtonPlus : boolean = false;

  constructor(private _injector: Injector) {
    super(_injector);
   }

  ngOnInit() {
    this.checkPermission();
    this.getContacts();
    
  }


  async checkPermission(){
    try{
      const perm = await Contacts.checkPermissions();
      this.permission = perm.contacts;
    }catch(e){
      console.log(e)
    }
    
  }

  async getContacts(){

    try{
      const result = await Contacts.getContacts({
        projection:{
          name: true,
          phones: true
        }
      })
      this.contacts = result.contacts;
      this.showButtonPlus = true;
    }catch(e){
      console.log(e)
    }
  }

  phoneFormated(phones:any[]){
    var numberFormated = "";
    const formated = phones.filter( (phone) => {
      if(phone.number.includes("+51 ")){
        return phone;
      }
    })

    if(formated.length>0){
      numberFormated = formated[0].number;
    }else{
      const not51 = phones.filter( (phone) => {
        if(!phone.number.includes("+51 ")){
          
        }
      })
    }

    // for(let i = 0;i<=phones.length-1;i++){
    //   if(phones[i].number.includes("+51 ")){
    //     numberFormated = phones[i].number;
    //     break;
    //   }
    // }


  }

  goToSetContact(){
    this.navigation.forward("/customer/manage-billing-data/add-company/set-contact");
  }

}
