import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPassComponent } from './forgot-pass.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


const ForgotPassModuleRoute: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: ForgotPassComponent,
  }
];
@NgModule({
  declarations: [ForgotPassComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ForgotPassModuleRoute),
    SweetAlert2Module.forRoot()
  ]
  ,
  exports: [RouterModule]
})
export class ForgotPassModule { }
