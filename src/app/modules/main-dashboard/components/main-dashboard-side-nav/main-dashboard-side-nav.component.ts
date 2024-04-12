import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-main-dashboard-side-nav',
  templateUrl: './main-dashboard-side-nav.component.html',
  styleUrls: ['./main-dashboard-side-nav.component.scss']
})
export class MainDashboardSideNavComponent implements OnInit, OnDestroy {
  public sideNavIsOpen: boolean = true;
  private readonly destroy$ = new Subject<void>();

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.sideNavIsOpenListener$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => this.sideNavIsOpen = value);
  }

  public toggleSideNav() {
    this.sideNavIsOpen = !this.sideNavIsOpen;
    this.layoutService.toggleSideNav(this.sideNavIsOpen);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
