import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-main-dashboard-page',
  templateUrl: './main-dashboard-page.component.html',
  styleUrls: ['./main-dashboard-page.component.scss']
})
export class MainDashboardPageComponent implements OnInit {
  public sideNavIsOpen: boolean = true;
  private readonly destroy$ = new Subject<void>();

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.sideNavIsOpenListener$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => this.sideNavIsOpen = value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
