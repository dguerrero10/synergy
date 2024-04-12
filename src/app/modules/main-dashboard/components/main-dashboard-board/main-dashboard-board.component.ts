import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCardModalComponent } from '../modals/create-card-modal/create-card-modal.component';
import { Tab } from 'src/app/core/util/interfaces';
import { TABS } from 'src/app/core/util/constants';
import { take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-main-dashboard-board',
  templateUrl: './main-dashboard-board.component.html',
  styleUrls: ['./main-dashboard-board.component.scss'],
})
export class MainDashboardBoardComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  public onSearchMode: boolean = false;
  public isOnRowDisplayMode: boolean = false;
  public tabs: Tab[] = TABS;
  public currentTab: string = "";

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      this.currentTab = params["board"] ? params["board"] : "kanban";
      this.updateQueryParams(this.currentTab);
    });
  }

  private updateQueryParams(tabValue: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { board: tabValue },
      queryParamsHandling: 'merge',
    });
  }

  public switchBoard(tab: Tab) {
    const { tabValue } = tab;
    this.currentTab = tabValue;
    this.updateQueryParams(tabValue);
  }

  public openCreateCardModal() {
    this.dialog.open(CreateCardModalComponent);
  }

  public toggleDisplay() {
    this.isOnRowDisplayMode = !this.isOnRowDisplayMode;
    this.layoutService.toggleKanbanDisplay(this.isOnRowDisplayMode);
  }

  public toggleSearch() {
    this.onSearchMode = !this.onSearchMode;
    if (this.onSearchMode) {
      setTimeout(() => {
        this.searchInput.nativeElement.focus(); // Focus on the input element
      }, 0);
    }
  }
}
