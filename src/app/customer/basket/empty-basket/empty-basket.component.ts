import { Component, OnInit, Injector } from '@angular/core';
import IBanner from 'src/app/interfaces/IBanner';
import IProduct from 'src/app/interfaces/IProduct';
import { AppThemeService, ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-empty-basket',
  templateUrl: './empty-basket.component.html',
  styleUrls: ['./empty-basket.component.scss'],
})

export class EmptyBasketComponent extends ViewComponent implements OnInit {

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


    /* MODAL INVITE */
  modalInvite: boolean;

  constructor(_injector: Injector, private inviteService:InviteService, private homeService: HomeService) {
    super(_injector);
    //Modal Invite
    this.inviteService.getStatusModalInvite.subscribe(status=>this.modalInvite =status);

    //Contenido de MyBasket
    this.themeService = _injector.get(AppThemeService);
    this.homeService.getSlides.subscribe( slides => this.slides = slides);
    this.homeService.getProductsForYou.subscribe( product => this.productsForYou = product);
    this.homeService.getProductsFeatured.subscribe( product => this.productsFeatured = product);


  }

  ngOnInit() {}


  goToProduct(){
    this.navigation.root("/customer/product","forward");
  }

  openInvite(){
    this.inviteService.setStatusModalInvite(true);
  }
}
