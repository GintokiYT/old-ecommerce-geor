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

  options : any[] = [
    {
      id: 1,
      option: "Pendiente de pago",
      selected: false
    },
    {
      id: 2,
      option: "Anulado",
      selected: false
    },
    {
      id: 3,
      option: "En proceso",
      selected: false
    },
    {
      id:4,
      option: "Entregado",
      selected: false
    },
    {
      id:5,
      option: "Todo",
      selected: true
    },
  ]

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
    const test =  this.options.filter( o => o.option!==type).map( o => o.selected=false);
    this.options.filter( o => o.option===type)[0].selected = true;
    
    const typeFormated = type.toUpperCase();

    setTimeout(() => {
      this.onModalNotVisible.emit(false);  
      this.onSelectFilter.emit(typeFormated);
    }, 200);
    
  }

}
