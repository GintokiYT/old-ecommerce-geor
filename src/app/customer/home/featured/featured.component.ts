import { Component, Injector, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { AppThemeService, ViewComponent } from '@geor360/ecore';
import IProduct from 'src/app/interfaces/IProduct';
import { HomeService } from 'src/app/services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent extends ViewComponent implements OnInit {

  productsFeatured: IProduct[];

  private themeService: AppThemeService;
  logoPath = '/assets/images/logo.svg';

  constructor(_injector: Injector, private homeService: HomeService,private router: Router) {
    super(_injector);
    this.themeService = _injector.get(AppThemeService);
    this.homeService.getProductsFeatured.subscribe( product => this.productsFeatured = product);
  }

  ngOnInit() {
  }

  goToProduct(){
    this.navigation.root("/customer/product","forward");
    const currentRouter=this.router.url;
    if(currentRouter==="/customer/empty-basket"){
      return this.navigation.root("customer/empty-basket/product","forward");
    }
  }

  // Imagenes insertadas con JS - tiempo de carga
  @ViewChildren('myProductsForYou') myProductsForYou: QueryList<ElementRef>
  @ViewChildren('myProductsFeatured') myProductsFeatured: QueryList<ElementRef>

  ngAfterContentInit() {

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
