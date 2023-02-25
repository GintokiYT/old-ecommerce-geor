import { Component, ElementRef, Injector, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Keyboard } from '@geor360/capacitor-keyboard';
import { ViewComponent } from '@geor360/ecore';

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

  @ViewChild('messageInput') messageInput: ElementRef;
  @ViewChild('contentInput') contentInput: ElementRef;

  @ViewChild('lastMessage') lastMessage: ElementRef;

  @ViewChildren('messageRef') messageRef: QueryList<ElementRef>;

  @ViewChild('contenedorDeChats') contenedorDeChats: ElementRef;


  ngAfterViewInit() {
    const contenedorDeChats = this.contenedorDeChats.nativeElement as HTMLDivElement;
    const contentInput: HTMLDivElement = this.contentInput.nativeElement;

    const ionFooter: HTMLDivElement = document.querySelector('.ion-footer');

    setTimeout(() => {
      contenedorDeChats.scrollTo(0, contenedorDeChats.scrollHeight);
    }, 100);

    this.messageInput.nativeElement.addEventListener('focus', () => {
      ionFooter.classList.add('active');
      ionFooter.classList.remove('disabled');
      setTimeout(() => {
        contentInput.classList.add('active');
        // Cuando se abre el teclado empuje el chat arriba
        contenedorDeChats.scrollTo(0, contenedorDeChats.scrollHeight);
      }, 100)
    });

    this.messageInput.nativeElement.addEventListener('blur', () => {
      ionFooter.classList.remove('active');
      ionFooter.classList.add('disabled');
      if(this.contentMessage.message.content.length === 0) {
        contentInput.classList.remove('active');
      }
    });

    this.messageRef.changes.subscribe(() => {
      setTimeout(() => {
        const lastMessage: HTMLDivElement = this.lastMessage.nativeElement;
        lastMessage.scrollIntoView({ behavior: 'smooth' })
      }, 250);
    })
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

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  showTime(index: number) {
    let selectedDiv = this.messageRef.toArray()[index].nativeElement;
    selectedDiv.querySelector('span').classList.toggle('invisible');
  }

  sendMessage() {
    let tiempoActual = this.getCurrentTime();

    // let uuid = self.crypto.randomUUID();
    let uuid = 1;

    let messageActual = this.contentMessage.message.content;

    if(this.contentMessage.message.content.length > 0){

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

      this.clearMessageObject();
    }
  }

  getCurrentTime() {
    let tiempoActual = '';

    let currentTime: any = new Date();
    let hours: any = currentTime.getHours();
    let minutes: any = currentTime.getMinutes();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if(hours > 12) {
      tiempoActual = `${hours - 12}:${minutes} pm`;
    } else {
      tiempoActual = `${hours}:${minutes} am`;
    }

    return tiempoActual;
  }

  clearMessageObject() {
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
  }
}
