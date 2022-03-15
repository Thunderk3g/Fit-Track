import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyEmailAddressComponent } from '../../userauth/verify-email-address/verify-email-address.component';
import { RouterModule, Routes } from '@angular/router';


const VerifyEmailAddressModuleRoute: Routes = [
  {
    path: '',
    component: VerifyEmailAddressComponent,
  }
];
@NgModule({
  declarations: [VerifyEmailAddressComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(VerifyEmailAddressModuleRoute),
  ],
  exports: [RouterModule]
})
export class VerifyEmailAddressModule { }
