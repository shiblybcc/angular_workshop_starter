import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './home.component';
import { InfoBoxComponent } from './info-box/info-box.component';


@NgModule({
  declarations: [HomeComponent, InfoBoxComponent],
  imports: [CommonModule, FormsModule, MatCardModule]
})
export class HomeModule {}
