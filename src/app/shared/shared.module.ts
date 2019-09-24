import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CanClickDirective } from './directives/can-click.directive';
import { ModalComponent } from './modal/modal.component';
import { HostElementService } from './modal/host/host-element.service';


@NgModule({
  declarations: [CanClickDirective, ModalComponent],
  imports: [
    CommonModule, MatCardModule, MatButtonModule
  ],
  providers: [HostElementService],
  exports: [CanClickDirective],
  entryComponents: [ModalComponent]
})
export class SharedModule { }
