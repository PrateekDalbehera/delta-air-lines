import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { GridDataResult } from "@progress/kendo-angular-grid";
import { toDataSourceRequestString } from "@progress/kendo-data-query";
import { StudentsResponse } from "./students.model";

@Injectable()
export class StudentsService {
    constructor(private http: HttpClient) {}

    private BASE_URL =
        "https://localhost:7297/data";

    public searchStudents(queryStr: string): Observable<StudentsResponse> {
        const payload = { query: queryStr };

        return this.http
            .post(`${this.BASE_URL}`, payload, {
                headers: {
                    "Content-Type":
                        "application/json; charset=UTF-8"
                }
            })
            .pipe(
                map(
                    (response) => <StudentsResponse>response
                )
            );
    }
}