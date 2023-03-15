import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-product',
  templateUrl: './footer-product.component.html',
  styleUrls: ['./footer-product.component.scss'],
})
export class FooterProductComponent extends ViewComponent implements OnInit {

  constructor(_injector:Injector, private router: Router) {
    super(_injector);
   }

  ngOnInit() {}

  goChat(){

    const currentRouter = this.router.url;

    if(currentRouter === '/customer/search-general/product-detail') {
      const id = 1;
      return this.navigation.forward('/customer/search-general/product-detail/internal-inbox/'+ id);
    }

    localStorage.setItem('back', '/customer/product');
    this.navigation.root('/customer/internal-inbox/1','forward');
  }
  goVariants(){

    const currentRouter = this.router.url;

    if(currentRouter === '/customer/search-general/product-detail') {
      return this.navigation.forward('/customer/search-general/product-detail/variants');
    }

    this.navigation.root('/customer/variants','forward');
  }


click(){
  const heartIcon = document.querySelector('.heart-icon');
  heartIcon.classList.toggle('active');

}

}
