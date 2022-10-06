import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  // function to toggle add task button
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // when toggle, return the subject as Observable
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
