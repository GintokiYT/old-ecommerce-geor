import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-type-bill',
  templateUrl: './modal-type-bill.component.html',
  styleUrls: ['./modal-type-bill.component.scss'],
})
export class ModalTypeBillComponent implements OnInit {

  @Input()
  titleModalDelete = ""

  @Input()
  modalIsVisible = false;

  @Output()
  onModalNotVisible: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onSelectTypeBill: EventEmitter<any> = new EventEmitter<any>();


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


  onClickFactura(){
    this.onSelectTypeBill.emit("Factura")
    this.modalIsVisible = false;
    this.onModalNotVisible.emit(this.modalIsVisible);
  }


  onClickBoleta(){
    this.onSelectTypeBill.emit("Boleta")
    this.modalIsVisible = false;
    this.onModalNotVisible.emit(this.modalIsVisible);
  }


}
