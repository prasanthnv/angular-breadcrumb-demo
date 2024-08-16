import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Admin',
      title: 'Admin Title',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        data: {
          breadcrumb: 'Dashboard',
        },
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('./employee/employee.module').then((m) => m.EmployeeModule),
        data: {
          breadcrumb: 'Employee',
        },
      },
      {
        path: 'teams',
        loadChildren: () =>
          import('./teams/teams.module').then((m) => m.TeamsModule),
        data: {
          breadcrumb: 'Teams',
        },
      },
      {
        path: 'project',
        loadChildren: () =>
          import('./project/project.module').then((m) => m.ProjectModule),
        data: {
          breadcrumb: 'Project',
        },
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
        data: {
          breadcrumb: 'Users',
        },
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
