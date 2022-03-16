import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const SignUpModuleRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SignUpComponent,
  }
];
@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule ,
    RouterModule.forChild(SignUpModuleRoute),
  ],
  exports: [RouterModule]

})
export class SignUpModule { }
