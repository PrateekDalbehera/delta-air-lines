import { AppShellComponent, PageNotFoundComponent } from '../shared';
import { appRoutesNames } from './app.routes.names';

export const APP_ROUTES = [
    {
        path: appRoutesNames.DEFAULT,
        component: AppShellComponent
    },

    {
        path: appRoutesNames.STUDENTS,
        component: AppShellComponent,
        loadChildren: () => import('../features/students/students.module').then(m => m.StudentsModule)
    },

    {
        path: appRoutesNames.NOT_FOUND,
        component: PageNotFoundComponent
    }
];