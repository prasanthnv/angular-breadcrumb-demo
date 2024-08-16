import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { ApplistComponent } from './applist/applist.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    children: [
      {
        path: 'applist',
        component: ApplistComponent,
        data: {
          breadcrumb: 'Applist',
        },
      },
      {
        path: '',
        redirectTo: 'applist',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
