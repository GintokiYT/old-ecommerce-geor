import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss'],
})
export class ModalDeleteComponent implements OnInit {

  @Input()
  titleModalDelete = ""

  @Input()
  modalIsVisible = false;

  @Output()
  onModalNotVisible: EventEmitter<any> = new EventEmitter<any>();


  @ViewChild("modal")
  modal!: ElementRef<HTMLDivElement>;

  constructor() { }

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

}
