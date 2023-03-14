import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.scss'],
})
export class ModalFilterComponent implements OnInit {

  @Input()
  modalIsVisible = false;

  @Output()
  onModalNotVisible: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onSelectFilter: EventEmitter<string> = new EventEmitter<string>();


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


  onSelectTypeFilter(type: string){
    const typeFormated = type.toUpperCase();

    this.onSelectFilter.emit(typeFormated);

    this.onModalNotVisible.emit(false);
  }

}
