import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const DashboardModuleRoute: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardModuleRoute),
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
