import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUserRoutingModule } from './new-user-routing.module';
import { SginInComponent } from './components/sgin-in/sgin-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SginInComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewUserRoutingModule,
  ],
  exports: [
  ],

})
export class NewUserModule { }
