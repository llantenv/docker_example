import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { DatePipe } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    DataTablesModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PeopleListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PeopleListComponent
  ],
  bootstrap: [ AppComponent ],
  providers:[DatePipe]  
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/