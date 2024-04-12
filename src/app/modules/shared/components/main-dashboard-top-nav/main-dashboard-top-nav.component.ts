import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard-top-nav',
  templateUrl: './main-dashboard-top-nav.component.html',
  styleUrls: ['./main-dashboard-top-nav.component.scss']
})
export class MainDashboardTopNavComponent {
  public readonly defaultAvatarImg = '../../../../../../assets/images/default.jpg';
  
  constructor(private router: Router) {}

  goToRoute(route: string) {
    window.open(`/main/${route}`, '_blank');
  }
}
