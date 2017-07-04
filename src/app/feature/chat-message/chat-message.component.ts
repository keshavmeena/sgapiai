import { Component, OnInit, Input } from '@angular/core';
import { chat } from "app/shared/chat";

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
})
export class ChatMessageComponent implements OnInit {

 @Input() message: chat;
  constructor() { }

 

  ngOnInit() {
  }

}
