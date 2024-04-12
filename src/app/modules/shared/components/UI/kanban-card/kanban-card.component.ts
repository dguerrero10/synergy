import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent {
  public readonly defaultAvatarImg = '../../../../../../assets/images/default.jpg';

  @Input() title!: string;
  @Input() displayId!: string;
  @Input() credit!: number;
  @Input() project!: string;
  @Input() team!: string;
  @Input() status!: string;
}
