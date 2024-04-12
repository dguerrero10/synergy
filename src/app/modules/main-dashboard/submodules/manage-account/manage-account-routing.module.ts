import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAccountPageComponent } from '../../pages/manage-account-page/manage-account-page.component';

const routes: Routes = [
  {
    path: '',
    component: ManageAccountPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAccountRoutingModule { }
