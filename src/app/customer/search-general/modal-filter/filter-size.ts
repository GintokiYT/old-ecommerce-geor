import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'filter-size',
  template: `
    <div class="item-filter">
      <div class="title">
        <p>Tamaño</p>
        <icon-arrow-bottom
          [ngStyle]="{'transform': statusArrow? 'rotate(-180deg)' : 'rotate(0)' }"
          #iconArrowBottom
          (click)="toggleInfo()"
        ></icon-arrow-bottom>
      </div>
      <div class="content" #mySize>
        <div class="size">
          <p>200 x 150 cm</p>
        </div>
        <div class="size">
          <p>244 x 122 cm</p>
        </div>
        <div class="size">
          <p>240 x 100 cm</p>
        </div>
        <div class="size">
          <p>120 x250 cm</p>
        </div>
      </div>
    </div>
  `,
  styles: [`

    p {
      margin: 0;
    }

    .item-filter {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 16px;

      @media (min-width: 390px) {
        padding: 0 24px;
      }
    }

    .title {
      display: flex;

      p {
        flex: 1;
        font-size: 14px;
        font-weight: 400;

        @media (min-width: 390px) {
          font-size: 16px;
        }
      }
    }

    .content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 10px;
      padding-top: 16px;

      &.close {
        display: none;
      }

      .size {
        padding: 8px;
        border: 1px solid #1B1F3C;
        border-radius: 4px;

        p {
          text-align: center;
          font-size: 14px;
          font-weight: 400;

          @media (min-width: 390px) {
            font-size: 16px;
          }
        }
      }
    }
    icon-arrow-bottom {
      padding: 3px;
      transition: transform .3s ease;
    }
  `],
})
export class FilterSizeComponent implements OnInit {

  @ViewChild('mySize') mySize: ElementRef;

  statusArrow: boolean;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const mySize:HTMLDivElement = this.mySize.nativeElement;
    this.statusArrow = mySize.classList.contains('close')? true : false;
  }

  toggleInfo() {
    const mySize: HTMLDivElement = this.mySize.nativeElement;
    mySize.classList.toggle('close');
    this.statusArrow = mySize.classList.contains('close')? true : false;
  }
}
