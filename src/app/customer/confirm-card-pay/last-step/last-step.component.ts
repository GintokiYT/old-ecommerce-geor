import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-step',
  templateUrl: './last-step.component.html',
  styleUrls: ['./last-step.component.scss'],
})
export class LastStepComponent implements OnInit {

  isAlertOpen = false;
  isCouponOpen= false;
  isMistakeOpen= false;

  constructor() { }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  setOpen2(isOpen: boolean) {
    this.isCouponOpen = isOpen;
  }
  setOpen3(isOpen: boolean) {
    this.isMistakeOpen = isOpen;
  }
}
