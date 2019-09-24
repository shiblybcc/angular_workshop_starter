import {
  Component,
  HostBinding,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { HostElementService } from './shared/modal/host/host-element.service';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  showDetails = false;

  constructor(
    hostElementService: HostElementService,
    hostElement: ViewContainerRef
  ) {
    hostElementService.setHost(hostElement);
  }


  customer = {
    id: 1,
    name: 'Simpson',
    firstname: 'Homer',
    hobbies: ['eat', 'sleep', 'beer']
  };

  callMe(phone) {
    alert(`Please call this number: ${phone}`);
  }

  ngOnInit() {}

}
