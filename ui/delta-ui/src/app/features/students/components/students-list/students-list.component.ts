import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { GridDataResult } from '@progress/kendo-angular-grid';

import { StudentsService } from '../../services';
import { StudentsResponse } from '../../models';


@Component({
  selector: 'students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {
  private subscription: Subscription = new Subscription();
  public loading = false;

  public data: GridDataResult = { data: [], total: 0 };

  constructor(private service: StudentsService) {
    this.sendApiRequest('');
  }

  public sendApiRequest(queryStr: string): void {
    this.loading = true;
    this.subscription.add(
      this.service.searchStudents(queryStr).subscribe((response: StudentsResponse) => {
          this.data = { data: response.students, total: response.students.length};
          this.loading = false;
      }));
}

public searchStudents(event: any): void {
  this.sendApiRequest(event);
}

public onAfterValueChange(value: string): void {
    this.sendApiRequest(value);
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

}
