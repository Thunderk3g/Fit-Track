import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../../userauth/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const SignInModuleRoute: Routes = [
  {
    path:'',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SignInComponent,
  }
];

@NgModule({
  
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule ,
    RouterModule.forChild(SignInModuleRoute),

  ],
  exports: [RouterModule]

})
export class SignInModule { }
