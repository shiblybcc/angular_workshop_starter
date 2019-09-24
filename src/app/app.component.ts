import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  showDetails = false;

  customer = {
    id: 1,
    name: 'Simpson',
    firstname: 'Homer',
    hobbies: ['eat', 'sleep', 'beer']
  };

  callMe(phone) {
    alert(`Please call this number: ${phone}`);
  }
}
