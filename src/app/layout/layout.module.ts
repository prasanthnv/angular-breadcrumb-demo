import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { BreadcrumbComponent } from '../shared/components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, BreadcrumbComponent, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
