import { Route } from '@angular/router';

import { studentsRoutesNames } from './students.routes.names';
import { StudentsListComponent } from '../components';


export const STUDENTS_ROUTES: Route[]  = [
    {
      path: studentsRoutesNames.DEFAULT,
      component: StudentsListComponent
    }
];