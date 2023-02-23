import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-modal-access-contact',
  templateUrl: './modal-access-contact.component.html',
  styleUrls: ['./modal-access-contact.component.scss'],
})
export class ModalAccessContactComponent extends ViewComponent implements OnInit {


  @Input()
  titleModalDelete = ""

  @Input()
  modalIsVisible = false;

  @Output()
  onModalNotVisible: EventEmitter<any> = new EventEmitter<any>();


  @ViewChild("modal")
  modal!: ElementRef<HTMLDivElement>;

  constructor(private _injector: Injector) {
      super(_injector);
   }

  ngOnInit() {}

  //click en el background
  ngAfterViewInit(): void {
    this.modal.nativeElement.addEventListener( "click" , (ev) => {

      if(ev.target===this.modal.nativeElement){
        this.modalIsVisible = false;
        this.onModalNotVisible.emit(this.modalIsVisible);
      }
    })
  }

  onClickBtnCancelar(){
    this.modalIsVisible = false;
    this.onModalNotVisible.emit(this.modalIsVisible);
  }

  onClickBtnEliminar(){
    this.modalIsVisible = false;
    this.onModalNotVisible.emit(
      {
        modalIsVisible: this.modalIsVisible,
        btnEliminar : true
      }
    );
  }

  onGoToContacts(){
    this.navigation.forward("/customer/contact")
    this.modalIsVisible = false;
    this.onModalNotVisible.emit(this.modalIsVisible);
  }

  onGoToBuy(){
    this.navigation.forward("/customer/buy");
    this.modalIsVisible = false;
    this.onModalNotVisible.emit(this.modalIsVisible);
  }

}
