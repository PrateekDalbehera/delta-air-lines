import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { StudentServiceModule } from './student-service.module';
import { StudentsResponse } from '../models';

@Injectable({
  providedIn: StudentServiceModule
})
export class StudentsService {

  constructor(private http: HttpClient) {}

  private BASE_URL = "https://localhost:7297";
  private studentsDataUrl = `${this.BASE_URL}/data`;

  public searchStudents(queryStr: string): Observable<StudentsResponse> {
      const payload = { query: queryStr };
      const headers = {
        "Content-Type": "application/json; charset=UTF-8"
      };

      return this.http
          .post(
              `${this.studentsDataUrl}`,
              payload,
              { headers }
          )
          .pipe(
              map(
                  (response) => <StudentsResponse>response
              )
          );
  }
}
