import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// App Root
import { AppComponent } from './app.component';

import { CustomersModule } from './customers/customers.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CustomersModule,
    HomeModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
