import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaceAdminRoutingModule } from './place-admin-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PlaceAdminRoutingModule
  ]
})
export class PlaceAdminModule { }
