import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../../userauth/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(SignInModuleRoute),

  ],
  exports: [RouterModule]

})
export class SignInModule { }
