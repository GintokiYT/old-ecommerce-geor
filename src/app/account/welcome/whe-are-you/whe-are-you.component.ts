import { AppNavigationService } from '@geor360/ecore';
import { RouteCollection } from 'src/shared/route-collection';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-whe-are-you',
  templateUrl: './whe-are-you.component.html',
  styleUrls: ['whe-are-you.component.scss']
})
export class WheAreYouComponent {

  theme: string = localStorage.getItem('mode') === 'dark'? 'dark' : 'light';
  status: boolean = false;

  @ViewChild('ContainerBody') ContainerBody: ElementRef;
  @ViewChild('ContainerModal') ContainerModal: ElementRef;
  @ViewChild('Modal') Modal: ElementRef;

  @ViewChild('maps') maps: ElementRef;

  ngAfterViewInit() {
    // this.ContainerModal.nativeElement.addEventListener('click', (e : any) => {
    //   if(e.target !== this.Modal.nativeElement) {
    //     this.Modal.nativeElement.classList.remove('animation-open-modal');
    //     this.Modal.nativeElement.classList.add('animation-close-modal')
    //     setTimeout(() => {
    //       this.ContainerBody.nativeElement.classList.toggle('open-modal')
    //       this.ContainerModal.nativeElement.classList.toggle('display-flex');
    //     }, 450)
    //   }
    // })

    const items = document.querySelectorAll('.maps .item');

    items.forEach(item => {
      item.addEventListener('click', () => {
        if(!item.classList.contains('active')) {
          items.forEach(item => item.classList.remove('active'));
          item.classList.add('active');
        }
      })
    })
  }

  constructor(private navigator: AppNavigationService) {}

  OnInit() {}

  onOpenModal() {
    if(this.status === false) {
      this.ContainerModal.nativeElement.classList.toggle('display-flex');
      this.Modal.nativeElement.classList.add('animation-open-modal');
      this.Modal.nativeElement.classList.remove('animation-close-modal');
    } else {
      this.onClose();
      this.navigator.forward(RouteCollection.account.welcome.myLocation);
    }
  }

  onDenied() {
    this.onClose();
  }

  onSubmit() {
    this.onClose();
    this.navigator.forward(RouteCollection.account.welcome.myLocation);
    this.status = true;
  }

  onClose() {
    this.Modal.nativeElement.classList.remove('animation-open-modal');
    this.Modal.nativeElement.classList.remove('animation-close-modal');
    this.ContainerBody.nativeElement.classList.remove('open-modal');
    this.ContainerModal.nativeElement.classList.remove('display-flex');
  }
}
