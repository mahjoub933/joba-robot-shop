import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './template-form-controls/template-form-controls.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SignInComponent,
    TemplateFormControlsComponent
  ],
  imports: [
     AppRoutingModule, FormsModule,CommonModule
  ]
})
export class UserModule { }
