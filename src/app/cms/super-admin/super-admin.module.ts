import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavComponent } from 'src/app/core/nav/nav.component';

@NgModule({
  declarations: [DashboardComponent, NavComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SuperAdminModule { }
