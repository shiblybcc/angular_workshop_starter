import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  Output,
  OnDestroy,
  EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs';

import { MessageService } from '../message.service';


@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit, OnChanges, OnDestroy {
  private _name: string;
  private subscription: Subscription;

  @Input()
  message: string;

  @Input()
  set name(value: string) {
    this._name = value.toLowerCase();
  }

  @Output()
  replyToParent = new EventEmitter<string>();

  get name(): string {
    return this._name;
  }

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.subscription = this.messageService.listener$.subscribe(
      msg => (this.message = msg)
    );
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes.message) {
      console.log('changes.message', changes.message.currentValue);
    }

    if (changes.name) {
      console.log('changes.name', changes.name.currentValue);
    }

    if (changes.message && changes.name) {
      console.log('Message AND Name changed');
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  reply(message?: string) {
    this.replyToParent.emit(message || 'Message from Child');
  }
}
