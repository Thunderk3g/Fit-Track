import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./userauth/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./userauth/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: 'verify-email-address',
    loadChildren: () => import('./userauth/verify-email-address/verify-email-address.module').then((m) => m.VerifyEmailAddressModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
