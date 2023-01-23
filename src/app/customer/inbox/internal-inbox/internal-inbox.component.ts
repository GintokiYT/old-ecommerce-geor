import { Component, ElementRef, Injector, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AppThemeService, ViewComponent } from '@geor360/ecore';

interface Message {
  id: string;
  time: string;
  author: string;
  image?: string;
  message: {
    type: string;
    content: string;
  };
}

@Component({
  selector: 'app-internal-inbox',
  templateUrl: './internal-inbox.component.html',
  styleUrls: ['./internal-inbox.component.scss']
})
export class InternalInboxComponent extends ViewComponent implements OnInit {

  @ViewChild('messageInput') messageInput: ElementRef;
  @ViewChild('contentInput') contentInput: ElementRef;

  @ViewChildren('messageRef') messageRef: QueryList<ElementRef>;


  ngAfterViewInit() {
    this.messageInput.nativeElement.addEventListener('focus', () => {
      this.contentInput.nativeElement.style.display = "flex"
    });
    this.messageInput.nativeElement.addEventListener('blur', () => {
      if(this.contentMessage.message.content.length === 0) {
        this.contentInput.nativeElement.style.display = "none"
      }
    });

    this.messageRef.changes.subscribe(()=>{
      this.messageRef.last.nativeElement.scrollIntoView({behavior: 'smooth'});
    });
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
      }
    },
    {
      id: '2',
      time: '10:03 am',
      author: 'user',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut et nunc donec id sit sed sit velitiqua 😅'
      }
    },
    {
      id: '3',
      time: '10:03 am',
      author: 'user',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor sit ame'
      }
    },
    {
      id: '4',
      time: '10:04 am',
      author: 'user',
      message: {
        type: 'text',
        content: 'sit ame'
      }
    },
    {
      id: '5',
      time: '10:05 am',
      author: 'business',
      image: '/assets/images/inbox/Avatar.jpg',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor 😅'
      }
    },
    {
      id: '6',
      time: '10:05 am',
      author: 'business',
      image: '/assets/images/inbox/Avatar.jpg',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor coe ram lor imp'
      }
    },
    {
      id: '7',
      time: '10:06 am',
      author: 'user',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor sit ame'
      }
    },
    {
      id: '8',
      time: '10:06 am',
      author: 'user',
      message: {
        type: 'text',
        content: 'sit ame'
      }
    },
    {
      id: '9',
      time: '10:07 am',
      author: 'business',
      image: '/assets/images/inbox/Avatar.jpg',
      message: {
        type: 'text',
        content: 'Lorem ipsum dolor mae loremd piwiye Lorem ipsum dolor 😅😅'
      }
    },
    {
      id: '10',
      time: '10:08 am',
      author: 'user',
      message: {
        type: 'image',
        content: '/assets/images/chat/image01.jpg'
      }
    },
    {
      id: '11',
      time: '10:09 am',
      author: 'user',
      message: {
        type: 'text',
        content: 'sit ame'
      }
    },
    {
      id: '12',
      time: '10:10 am',
      author: 'user',
      message: {
        type: 'image',
        content: '/assets/images/chat/image02.png'
      }
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
    }
  }

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {
  }

  enviarMessage() {

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

    let uuid = self.crypto.randomUUID();

    let messageActual = this.contentMessage.message.content;

    if(this.contentMessage.message.content.length > 0){
      console.log('Mensaje enviado')

      this.contentMessage = {
        id: uuid,
        time: tiempoActual,
        author: 'user',
        image: '',
        message: {
          type: 'text',
          content: messageActual
        }
      }

      this.messages.push(this.contentMessage);

      this.contentInput.nativeElement.style.display = "none";

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
}
