import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPassComponent } from './forgot-pass.component';


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

  ]
  ,
  exports: [RouterModule]
})
export class ForgotPassModule { }
