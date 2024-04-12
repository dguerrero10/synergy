import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { LayoutService } from 'src/app/core/services/layout.service';
import { DUMMY_CARD_DATA } from 'src/app/core/util/constants';
import { Card } from 'src/app/core/util/interfaces';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit, OnDestroy {
  public isOnRowDisplayMode: boolean = false;
  public dummyCardData: Card[] = DUMMY_CARD_DATA;

  public notStartedList: Card[] = [];
  public inProgressList: Card[] = [];
  public needSupportList: Card[] = [];
  public completedList: Card[] = [];

  private statusMap = new Map<String, any>();
  private readonly destroy$ = new Subject<void>();

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.isKanbanOnRowDisplayListener$
    .pipe(
      takeUntil(this.destroy$),
      tap((value: boolean) => (this.isOnRowDisplayMode = value)))
    .subscribe();
    this.sortCards(this.dummyCardData);
    this.buildStatusMap();
  }

  public drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.updateStatus(event.container.id.split("-").pop(), event.currentIndex);
  }

  private updateStatus(newId: any, currentIndex: any) {
    const { status, list } = this.statusMap.get(newId);
    list[currentIndex].status = status;
  }

  private sortCards(cards: Card[]) {
    for (const card of cards) {
      switch (card.status.toLowerCase()) {
        case 'not started': {
          this.notStartedList.push(card);
          break;
        }
        case 'in progress': {
          this.inProgressList.push(card);
          break;
        }
        case 'need support': {
          this.needSupportList.push(card);
          break;
        }
        case 'completed': {
          this.completedList.push(card);
          break;
        }
        default:
          break;
      } 
    }
  }

  private buildStatusMap() {
    this.statusMap.set('0', { status: 'Not started', list: this.notStartedList });
    this.statusMap.set('1', { status: 'In progress', list: this.inProgressList });
    this.statusMap.set('2', { status: 'Need support', list: this.needSupportList });
    this.statusMap.set('3', { status: 'Completed', list: this.completedList });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
