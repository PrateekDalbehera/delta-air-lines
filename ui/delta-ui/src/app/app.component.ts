import { Component } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { StudentsService } from './students.service';
import { StudentsResponse } from './students.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'delta-ui';
  private subscriber: any;
  public loading = false;

  public data: GridDataResult = { data: [], total: 0 };

  constructor(private service: StudentsService) {
    this.sendApiRequest('');
  }

  public sendApiRequest(queryStr: string): void {
      this.loading = true;
      this.subscriber =
        this.service.searchStudents(queryStr).subscribe((response: StudentsResponse) => {
            this.data = { data: response.students, total: response.students.length};
            this.loading = false;
        });
  }

  public searchStudents(event: any): void {
    this.sendApiRequest(event);
  }

  public onAfterValueChange(value: string): void {
      this.sendApiRequest(value);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
