import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { AppRoutingModule } from './app-routing.module';
import { StudentsService } from './students.service';
import { AppComponent } from './app.component';
import { AfterValueChangedDirective } from './after-value-changed.directive';


@NgModule({
  declarations: [
    AppComponent,
    AfterValueChangedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridModule,
    InputsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
