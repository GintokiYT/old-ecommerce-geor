import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class  ProductService  {

  private products: any[] = [
    {
      id: 1,
      image: '/assets/collaborative-basquet/Rectangle 1600.png',
      price: 9780,
      name: 'Plancha de bicarbonato <br/> pulveriza zado lorem ipsum',
      buyer: ['Gerardo Ortíz'],
      descriptions: [
        {
          id: 1,
          description: 'Mostaza, 120x150 cm, 25 mm',
          quantity: 10503
        }
      ],
      isChecked: false
    },
    {
      id: 2,
      image: '/assets/collaborative-basquet/Producto2.png',
      price: 48.90,
      name: 'Acrílico liso bajo',
      buyer: ['Gerardo Ortiz','Wilfredo','Luis'],
      descriptions: [
        {
          id: 1,
          description: 'Verde jade, 120x150 cm, 25 mm',
          quantity: 7300
        },
        {
          id: 2,
          description: 'Naraja limon, 120x150 cm, 25 mm',
          quantity: 2
        },
        {
          id: 3,
          description: 'Gris claro, 120x150 cm, 25 mm',
          quantity: 4
        }
      ],
      isChecked: false
    }
  ];

  private productsMyBasket: any[] = [
    {
      id: 1,
      image: '/assets/collaborative-basquet/Rectangle 1600.png',
      price: 9780,
      name: 'Plancha de bicarbonato <br/> pulveriza zado lorem ipsum',
      buyer: ['Gerardo Ortíz'],
      descriptions: [
        {
          id: 1,
          description: 'Mostaza, 120x150 cm, 25 mm',
          quantity: 10503
        }
      ],
      isChecked: false
    },
    {
      id: 2,
      image: '/assets/collaborative-basquet/Producto2.png',
      price: 48.90,
      name: 'Acrílico liso bajo',
      buyer: ['Gerardo Ortiz','Wilfredo','Luis'],
      descriptions: [
        {
          id: 1,
          description: 'Verde jade, 120x150 cm, 25 mm',
          quantity: 7300
        },
        {
          id: 2,
          description: 'Naraja limon, 120x150 cm, 25 mm',
          quantity: 2
        },
        {
          id: 3,
          description: 'Gris claro, 120x150 cm, 25 mm',
          quantity: 4
        }
      ],
      isChecked: false
    }
  ];


  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductsMyBasket() {
    return this.products;
  }
}
