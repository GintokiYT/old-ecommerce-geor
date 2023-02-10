import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";
import IBanner from '../interfaces/IBanner';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // Slides
  private slides = new BehaviorSubject<IBanner[]>(
    [
      { image: '/assets/home/slider-main/image1.jpg' },
      { image: '/assets/home/slider-main/image2.jpg' },
      { image: '/assets/home/slider-main/image3.jpg' }
    ]
  );
  get getSlides(): Observable<IBanner[]> {
    return this.slides;
  }

}
