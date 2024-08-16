import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      breadcrumb: 'asd',
    },
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
