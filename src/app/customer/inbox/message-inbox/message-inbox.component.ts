import { Component, Input, OnInit } from '@angular/core';

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
  selector: 'app-message-inbox',
  templateUrl: './message-inbox.component.html',
  styleUrls: ['./message-inbox.component.scss'],
})
export class MessageInboxComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit() {}

}
