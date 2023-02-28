import { Component, Injector, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { AppThemeService, ViewComponent } from '@geor360/ecore';
import IBanner from 'src/app/interfaces/IBanner';
import IProduct from 'src/app/interfaces/IProduct';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: '<app-header-home>',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent extends ViewComponent implements OnInit {

  contry: string = localStorage.getItem('country') || 'PE';
  image: string = this.contry === 'PE' ? './assets/flags/pe.svg' :
                  this.contry === 'AR' ? './assets/flags/ar.svg' :
                  './assets/flags/cl.svg' ;

  slides:IBanner[];

  productsForYou: IProduct[];

  productsFeatured: IProduct[];

  slideOptions: any = {
    autoplay: {
      delay: 5000,
    },
  };

  productSlidesOptions: any = {
    spaceBetween: 16,
    slidesPerView: 'auto',
  };

  private themeService: AppThemeService;

  logoPath = '/assets/images/logo.svg';

  constructor(_injector: Injector, private homeService: HomeService) {
    super(_injector);
    this.themeService = _injector.get(AppThemeService);
    this.homeService.getSlides.subscribe( slides => this.slides = slides);
    this.homeService.getProductsForYou.subscribe( product => this.productsForYou = product);
    this.homeService.getProductsFeatured.subscribe( product => this.productsFeatured = product);
  }

  ngOnInit() {
    if (this.themeService.mode === 'dark') {
      this.logoPath = '/assets/images/logo-dark.svg';
    }
  }

  goToProduct(){
    this.navigation.root("/customer/product","forward");
  }

  // Imagenes insertadas con JS - tiempo de carga
  @ViewChildren('myProductsForYou') myProductsForYou: QueryList<ElementRef>
  @ViewChildren('myProductsFeatured') myProductsFeatured: QueryList<ElementRef>

  ngAfterContentInit() {

    //* Productos Sliders
    setTimeout(() => {
      const DivProductsForYou = Array.from(this.myProductsForYou.toArray().map( item => item.nativeElement)) as HTMLDivElement[];

      this.productsForYou.forEach( (item, index) => {
        const image: HTMLDivElement = DivProductsForYou[index].querySelector('.image');
        const urlImage = item.image || '';

        const img = new Image();
        img.src = urlImage;

        img.onload = function() {
          image.style.backgroundImage = `url(${urlImage})`;
          DivProductsForYou[index].classList.remove('active');
        }
        img.onerror = function() {
          console.log('La imagen no está disponible en la ruta: ' + urlImage);
        }

      })
    }, 100);


    //* Productos Destacados
    setTimeout(() => {
      const DivProductsFeatured = Array.from(this.myProductsFeatured.toArray().map( item => item.nativeElement)) as HTMLDivElement[];

      this.productsFeatured.forEach( (item, index) => {
        const image: HTMLDivElement = DivProductsFeatured[index].querySelector('.image');
        const urlImage = item.image || '';

        const img = new Image();
        img.src = urlImage;

        img.onload = function() {
          image.style.backgroundImage = `url(${urlImage})`;
          DivProductsFeatured[index].classList.remove('active');
        }
        img.onerror = function() {
          console.log('La imagen no está disponible en la ruta: ' + urlImage);
        }

      })
    }, 100);
  }
}
