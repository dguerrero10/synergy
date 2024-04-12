import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAccountRoutingModule } from './manage-account-routing.module';
import { MaterialUIModule } from 'src/app/modules/shared/modules/materialUI.module';
import { ManageAccountPageComponent } from '../../pages/manage-account-page/manage-account-page.component';
import { SharedModule } from 'src/app/modules/shared/modules/shared.module';


@NgModule({
  declarations: [
    ManageAccountPageComponent
  ],
  imports: [
    CommonModule,
    ManageAccountRoutingModule,
    SharedModule,
    MaterialUIModule
  ]
})
export class ManageAccountModule { }
