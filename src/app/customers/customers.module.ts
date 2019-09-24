import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerStatusPipe } from './customer-status.pipe';


@NgModule({
  declarations: [
    CustomerDetailsComponent,
    CustomerComponent,
    CustomerFormComponent,
    CustomerListComponent,
    CustomerStatusPipe
  ],
  exports: [CustomerComponent, CustomerFormComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    // MatFormFieldModule
  ]
})
export class CustomersModule {}
