import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUIModule } from './materialUI.module';
import { KanbanCardComponent } from '../components/UI/kanban-card/kanban-card.component';
import { MainDashboardTopNavComponent } from '../components/main-dashboard-top-nav/main-dashboard-top-nav.component';


@NgModule({
  declarations: [
    KanbanCardComponent,
    MainDashboardTopNavComponent
  ],
  imports: [
    MaterialUIModule,
    CommonModule
  ],
  exports: [
    KanbanCardComponent,
    MainDashboardTopNavComponent,
    MaterialUIModule
  ]
})
export class SharedModule { }
