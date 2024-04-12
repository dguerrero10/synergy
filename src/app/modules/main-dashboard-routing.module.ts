import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardPageComponent } from './main-dashboard/pages/main-dashboard-page/main-dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainDashboardPageComponent,
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./main-dashboard/submodules/manage-account/manage-account.module').then(
        (m) => m.ManageAccountModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainDashboardRoutingModule {}
