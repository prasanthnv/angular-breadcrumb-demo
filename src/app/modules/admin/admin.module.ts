import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, BreadcrumbComponent],
})
export class AdminModule {}
