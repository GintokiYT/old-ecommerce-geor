import { Component, OnInit } from '@angular/core';

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
export class InternalInboxComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
