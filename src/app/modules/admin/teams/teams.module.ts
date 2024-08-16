import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { ApplistComponent } from './applist/applist.component';
import { BreadcrumbComponent } from "../../../shared/components/breadcrumb/breadcrumb.component";


@NgModule({
  declarations: [
    TeamsComponent,
    ApplistComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    BreadcrumbComponent
]
})
export class TeamsModule { }
