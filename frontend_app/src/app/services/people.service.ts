import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(`${environment.backend_url}/people`);
    }
    
}
