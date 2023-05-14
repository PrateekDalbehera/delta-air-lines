import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { STUDENTS_ROUTES } from './students.routes';


@NgModule({
    imports: [RouterModule.forChild(
        STUDENTS_ROUTES
    )],
    exports: [RouterModule]
})
export class StudentsRoutingModule { }