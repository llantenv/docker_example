import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Subscription, Subject } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  
  private peopleSubs: Subscription;

  people: Array<object>;
  dtOptions: DataTables.Settings = {};
  show : boolean = false

  constructor(private _peopleService:PeopleService, private _datePipe: DatePipe){}

  ngOnInit(): void {

    this.people = [];

    this.peopleSubs = this._peopleService.getAll()
      .subscribe((response) => {
        let _self = this
        response['data'].map(function(e) {
          e['createdAt'] = _self.transformDate(e['createdAt'])
        });

        this.dtOptions = {
          data:response['data'],
          pagingType: 'full_numbers',
          pageLength: 10, 
          columns: [
            { title: 'ID', data: 'id' },
            { title: 'Name', data: 'name' },
            { title: 'Height', data: 'height'},
            { title: 'Mass', data: 'mass'},
            { title: 'Hair color', data: 'hair_color'},
            { title: 'Skin color', data: 'skin_color'},
            { title: 'Eye color', data: 'eye_color'},
            { title: 'Gender', data: 'gender'},
            { title: 'Created At', data: 'createdAt'}
          ]
        };

        this.show = true
        
      });

  }

  ngOnDestroy() {
    if (this.peopleSubs) {
        this.peopleSubs.unsubscribe();
    }
  }

  private transformDate(date) {
    return this._datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/