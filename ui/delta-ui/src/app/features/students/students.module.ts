import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { StudentsRoutingModule } from './routes';
import { StudentsListComponent } from './components';
import { StudentServiceModule } from './services';
import { AfterValueChangedDirective } from './directives';


@NgModule({
  declarations: [
    StudentsListComponent,
    AfterValueChangedDirective
  ],
  imports: [
    CommonModule,
    GridModule,
    InputsModule,
    StudentsRoutingModule,
    StudentServiceModule
  ]
})
export class StudentsModule { }
