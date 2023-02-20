import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-camera',
  templateUrl: './modal-camera.component.html',
  styleUrls: ['./modal-camera.component.scss'],
})
export class ModalCameraComponent implements OnInit {


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
        this.onModalNotVisible.emit();
      }
    })
  }

  openDefaultPromptCamera(){
    this.modalIsVisible = false;
    this.onModalNotVisible.emit("prompt-camera");
  }


}
