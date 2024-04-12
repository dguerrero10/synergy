import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { MainDashboardPageComponent } from './main-dashboard/pages/main-dashboard-page/main-dashboard-page.component';
import { SharedModule } from './shared/modules/shared.module';
import { MainDashboardSideNavComponent } from './main-dashboard/components/main-dashboard-side-nav/main-dashboard-side-nav.component';
import { MainDashboardBoardComponent } from './main-dashboard/components/main-dashboard-board/main-dashboard-board.component';
import { CreateCardModalComponent } from './main-dashboard/components/modals/create-card-modal/create-card-modal.component';
import { CycleControlsComponent } from './main-dashboard/components/cycle-controls/cycle-controls.component';
import { CycleMetricsComponent } from './main-dashboard/components/cycle-metrics/cycle-metrics.component';
import { AddTeamMemberComponent } from './main-dashboard/components/add-team-member/add-team-member.component';
import { AdminComponent } from './main-dashboard/components/admin/admin.component';
import { KanbanComponent } from './main-dashboard/components/kanban/kanban.component';

@NgModule({
  declarations: [
    MainDashboardPageComponent,
    MainDashboardSideNavComponent,
    MainDashboardBoardComponent,
    CreateCardModalComponent,
    CycleControlsComponent,
    CycleMetricsComponent,
    AddTeamMemberComponent,
    AdminComponent,
    KanbanComponent,
  ],
  imports: [
    CommonModule,
    MainDashboardRoutingModule,
    SharedModule
  ]
})
export class MainDashboardModule { }
