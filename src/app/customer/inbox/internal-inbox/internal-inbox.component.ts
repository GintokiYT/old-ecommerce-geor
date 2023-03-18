import { Component, ElementRef, Injector, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Keyboard } from '@geor360/capacitor-keyboard';
import { ViewComponent } from '@geor360/ecore';
import { Router } from '@angular/router';

interface Message {
  id: string;
  time: string;
  author: string;
  image?: string;
  message: {
    type: string;
    content: string;
  };
  separacion?: boolean;
  fecha?: string;
}

@Component({
  selector: 'app-internal-inbox',
  templateUrl: './internal-inbox.component.html',
  styleUrls: ['./internal-inbox.component.scss']
})
export class InternalInboxComponent extends ViewComponent implements OnInit {

  // Yanci
  isCouponOpen: boolean = false;

  @ViewChild('contentInput') contentInput: ElementRef;

  @ViewChildren('messageRef') messageRef: QueryList<ElementRef>;

  @ViewChild('contenedorDeChats') contenedorDeChats: ElementRef;

  @ViewChild('ContentmessageInput') ContentmessageInput: ElementRef;
  @ViewChild('messageInput') messageInput: ElementRef;
  @ViewChild('placeholder') placeholder: ElementRef;
  @ViewChild('buttonSend') buttonSend: ElementRef;

  ngAfterViewInit() {
    const contenedorDeChats: HTMLDivElement = this.contenedorDeChats.nativeElement;
    const contentInput: HTMLDivElement = this.contentInput.nativeElement;

    //* Al cargar la página los chats se muestran primeros
    setTimeout(() => {
      this.showLastChat(contenedorDeChats)
    }, 100);

    // Nuevo chat
    const messageInput:HTMLDivElement = this.messageInput.nativeElement;
    const placeholder: HTMLDivElement = this.placeholder.nativeElement;
    const buttonSend: HTMLDivElement = this.buttonSend.nativeElement;

    messageInput.addEventListener('focus', () => {
      // El teclado es muy lento consultar con Antonio
      setTimeout(() => {
        this.showLastChat(contenedorDeChats)
      }, 500);

      contentInput.classList.add('active');
      placeholder.style.visibility = 'hidden'
    })

    messageInput.addEventListener('blur', () => {
      if(messageInput.innerText === '') {
        contentInput.classList.remove('active');
        placeholder.style.visibility = 'unset'
      } else {
        placeholder.style.visibility = 'hidden'
      }
    })

    placeholder.addEventListener('click', () => {
      messageInput.focus();
      placeholder.style.visibility = 'hidden'
    })

    messageInput.addEventListener('keydown', (event: KeyboardEvent) => {
      // Verificar si la tecla presionada es Enter
    	if (event.key === 'Enter') {
    		// Verificar si la tecla Shift no está presionada
    		if (!event.shiftKey) {
    			// Enviar el mensaje
    			this.enviarMensaje();
    		}
    	}
    })

    buttonSend.addEventListener('click', () => {

      const message:string = this.enviarMensaje();

      let tiempoActual = this.getCurrentTime();

      let uuid = self.crypto.randomUUID();

      let messageActual = message;

      if(messageActual.length > 0){

        this.contentMessage = {
          id: String(uuid),
          time: tiempoActual,
          author: 'user',
          image: '',
          message: {
            type: 'text',
            content: messageActual
          }
        }

        this.messages.push(this.contentMessage);

        // Ver el mensaje si tiene los saltos
        console.log(messageActual);

        this.contentInput.nativeElement.classList.remove('active');

        this.clearMessageObject(messageInput, placeholder);

        messageInput.focus();
      }
    })
  }

  enviarMensaje() {
    const ContentmessageInput: HTMLDivElement = this.ContentmessageInput.nativeElement;
    let texto: string = ContentmessageInput.innerText.trim();
    return texto.replace(/\n/g, "<br>");
  }

  showLastChat(contenedorDeChats: HTMLDivElement) {
    contenedorDeChats.scrollTo(0, contenedorDeChats.scrollHeight);
  }

  messages: Message [] = [
    {
      id: '1',
      time: '10:00 am',
      author: 'business',
      image: '/assets/images/inbox/Avatar.jpg',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor 😅'
      },
      separacion: true,
      fecha: 'Julio 24, 2022'
    },
    {
      id: '2',
      time: '10:03 am',
      author: 'user',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut et nunc donec id sit sed sit velitiqua 😅'
      },
      separacion: false
    },
    {
      id: '3',
      time: '10:03 am',
      author: 'user',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor sit ame'
      },
      separacion: false
    },
    {
      id: '4',
      time: '10:04 am',
      author: 'user',
      message: {
        type: 'text',
        content: 'sit ame'
      },
      separacion: true
    },
    {
      id: '5',
      time: '10:05 am',
      author: 'business',
      image: '/assets/images/inbox/Avatar.jpg',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor 😅'
      },
      separacion: false,
      fecha: 'Ayer'
    },
    {
      id: '6',
      time: '10:05 am',
      author: 'business',
      image: '/assets/images/inbox/Avatar.jpg',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor coe ram lor imp'
      },
      separacion: true
    },
    {
      id: '7',
      time: '10:06 am',
      author: 'user',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor sit ame'
      },
      separacion: false,
    },
    {
      id: '8',
      time: '10:06 am',
      author: 'user',
      message: {
        type: 'text',
        content: 'sit ame'
      },
      separacion: true
    },
    {
      id: '9',
      time: '10:07 am',
      author: 'business',
      image: '/assets/images/inbox/Avatar.jpg',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor mae loremd piwiye Lorem ipsum dolor 😅😅'
      },
      separacion: true,
      fecha: 'Hoy'
    },
    {
      id: '10',
      time: '10:08 am',
      author: 'user',
      message: {
        type: 'image',
        content: '/assets/images/chat/image01.jpg'
      },
      separacion: false
    },
    {
      id: '11',
      time: '10:09 am',
      author: 'user',
      message: {
        type: 'text',
        content: 'sit ame'
      },
      separacion: false
    },
    {
      id: '12',
      time: '10:10 am',
      author: 'user',
      message: {
        type: 'image',
        content: '/assets/images/chat/image02.png'
      },
      separacion: false
    },
  ]

  contentMessage: Message = {
    id: '',
    time: '',
    author: '',
    image: '',
    message: {
      type: 'text',
      content: ''
    },
    separacion: false
  }

  constructor(_injector: Injector, private router: Router) {
    super(_injector);
  }

  ngOnInit() {
    const route = this.router.url;
    if(route.includes('/customer/last-step/internal-inbox')) {
      setTimeout(() => {
        this.isCouponOpen = true;
      }, 1500);
    }

  }

  showTime(index: number) {
    let selectedDiv = this.messageRef.toArray()[index].nativeElement;
    selectedDiv.querySelector('span').classList.toggle('invisible');
  }

  getCurrentTime() {
    let tiempoActual = '';

    let currentTime: any = new Date();
    let hours: any = currentTime.getHours();
    let minutes: any = currentTime.getMinutes();

    if (minutes < 10) minutes = "0" + minutes;

    if(hours > 12) tiempoActual = `${hours - 12}:${minutes} pm`;
    else tiempoActual = `${hours}:${minutes} am`;

    return tiempoActual;
  }

  clearMessageObject(messageInput : HTMLDivElement, placeholder: HTMLDivElement) {
    this.contentMessage = {
      id: '',
      time: '',
      author: '',
      image: '',
      message: {
        type: 'text',
        content: ''
      }
    }
    messageInput.innerHTML = '';
    placeholder.style.visibility = 'unset'
  }

  // Funcion de Yanci Modal
  closeModalCoupon() {
    this.isCouponOpen = false;
  }

  goToConditions(){
    this.isCouponOpen = false;
    setTimeout(() => {
      this.navigation.root("/customer/manage-coupons/conditions","forward");  
    }, 500);
    

  }

  goToProductCoupon(){
    this.isCouponOpen = false;
    setTimeout(() => {
      this.navigation.root("/customer/manage-coupons/products-with-coupon","forward");  
    }, 500);
    
  }
}

