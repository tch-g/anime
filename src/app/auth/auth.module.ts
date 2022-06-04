import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { AuthRoutingModule } from './auth.routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    SingInComponent,
    SingUpComponent
  ],
  imports: [
    CommonModule, AuthRoutingModule, SharedModule, FormsModule
  ]
})
export class AuthModule { }
