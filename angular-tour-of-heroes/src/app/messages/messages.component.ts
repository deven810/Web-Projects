import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // the property must be public b/c ur about to bind it to template
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
