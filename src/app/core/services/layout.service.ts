import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private sideNavIsOpen$ = new BehaviorSubject<boolean>(true);
  public sideNavIsOpenListener$ = this.sideNavIsOpen$.asObservable();
  private isKanbanOnRowDisplay$ = new BehaviorSubject<boolean>(false);
  public isKanbanOnRowDisplayListener$ = this.isKanbanOnRowDisplay$.asObservable();

  constructor() {}

  toggleSideNav(value: boolean) {
    this.sideNavIsOpen$.next(value);
  }

  toggleKanbanDisplay(value: boolean) {
    this.isKanbanOnRowDisplay$.next(value);
  }
}
