import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MessageService } from './message.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showDetails = false;
  message = 'INIT';
  name = 'START_';
  reply = '';

  customer = {
    id: 1,
    name: 'Simpson',
    firstname: 'Homer',
    hobbies: ['eat', 'sleep', 'beer']
  };

  @ViewChild('child', { static: true })
  private child: InfoBoxComponent;

  constructor(private messageService: MessageService) {}

  callMe(phone) {
    alert(`Please call this number: ${phone}`);
  }

  changeChild() {
    this.message = new Date().toISOString();
    this.name += 'X';
  }

  processReply(event) {
    this.reply = event;
  }

  processReplyFromCode() {
    this.child.reply('Send from parent via CODE');
  }

  sendMessage() {
    this.messageService.sendMessage('Send from parent via service');
  }

}
