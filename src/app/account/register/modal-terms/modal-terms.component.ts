import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-terms',
  templateUrl: './modal-terms.component.html',
  styleUrls: ['./modal-terms.component.scss'],
})
export class ModalTermsComponent implements OnInit {

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
        this.onModalNotVisible.emit("no-validate");
      }
    })
  }

  onClickContinue(){
    this.modalIsVisible = false;
    this.onModalNotVisible.emit("validate");
  }


}
