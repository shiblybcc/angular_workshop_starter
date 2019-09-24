import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit, OnChanges {
  private _name: string;

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

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: Record<string, SimpleChange>) {
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

  reply(message?: string) {
    this.replyToParent.emit(message || 'Message from Child');
  }
}
