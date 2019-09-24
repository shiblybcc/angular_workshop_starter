import { Component, OnInit, EventEmitter, Input, Output, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  @Input() customer;
  @Output() deleteCustomer = new EventEmitter<number>();

  showDetails = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  edit() {
    this.router.navigate(['customers', this.customer.id]);
  }

  delete(id: number) {
    this.deleteCustomer.emit(id);
  }

  showMore() {
    this.showDetails = !this.showDetails;
  }
}
