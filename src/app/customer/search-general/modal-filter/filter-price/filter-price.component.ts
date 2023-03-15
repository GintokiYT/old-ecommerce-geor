import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.scss'],
})
export class FilterPriceComponent implements OnInit {

  @ViewChild('myPrice') myPrice: ElementRef;

  statusArrow: boolean;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const slider: HTMLDivElement = document.querySelector('.slider');
    const sliderFill: HTMLDivElement = document.querySelector('.slider-fill');
    const sliderThumb: HTMLDivElement = document.querySelector('.slider-thumb');
    const output: HTMLDivElement = document.querySelector('.output');

    let isDragging = false;
    let sliderValue: any = 30;

    updateSlider(sliderValue);

    // PC
    slider.addEventListener('mousedown', () => {
      isDragging = true;
    });
    // Celular
    slider.addEventListener('touchstart', (event) => {
      event.preventDefault();
      isDragging = true;
    });

    // PC
    slider.addEventListener('mouseup', () => {
      isDragging = false;
    });
    // Celular
    slider.addEventListener('touchend', () => {
      isDragging = false;
    });

    // PC
    slider.addEventListener('mousemove', (event) => {
      if (isDragging) {
        let mousePosition: any = getMousePosition(event);
        let sliderPosition: any = getSliderPosition(mousePosition.x);
        updateSlider(sliderPosition);
      }
    });
    // Celular
    slider.addEventListener('touchmove', (event) => {
      event.preventDefault();
      if (isDragging) {
        let touchPosition: any = getTouchPosition(event);
        let sliderPosition: any = getSliderPosition(touchPosition.x);
        updateSlider(sliderPosition);
      }
    });

    function getMousePosition(event) {
      let clientX = event.clientX;
      let sliderRect = slider.getBoundingClientRect();
      let offsetX = clientX - sliderRect.left;
      return { x: offsetX };
    }

    function getTouchPosition(event) {
      let clientX = event.touches[0].clientX;
      let sliderRect = slider.getBoundingClientRect();
      let offsetX = clientX - sliderRect.left;
      return { x: offsetX };
    }

    function getSliderPosition(offsetX) {
      let sliderWidth = slider.offsetWidth;
      let thumbWidth = sliderThumb.offsetWidth; // Agregamos esta línea para obtener el ancho de la bolita
      let sliderPosition = ((offsetX - thumbWidth / 2) / (sliderWidth - thumbWidth)) * 100; // Actualizamos la posición del slider para tener en cuenta el ancho de la bolita
      sliderPosition = Math.min(100, Math.max(0, sliderPosition)); // clamp value between 0 and 100
      return sliderPosition;
    }

    function updateSlider(position) {
      sliderValue = Number(position).toFixed(2);
      sliderFill.style.width = `${sliderValue}%`;
      sliderThumb.style.left = `calc(${sliderValue}% - 10px)`;
      output.innerHTML = sliderValue > 0 ? sliderValue : 0;
      output.style.left = `calc(${sliderValue}% - 30px)`;
    }

  }

  toggleInfo() {
    const myPrice: HTMLDivElement = this.myPrice.nativeElement;
    myPrice.classList.toggle('close');
    this.statusArrow = myPrice.classList.contains('close')? true : false;
  }

}
