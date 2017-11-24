import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ApiUrlService } from '../shared/apiUrl.service';
import { IDepartment } from './IDepartment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DepartmentService {
    _url: string;
    constructor(private httpClient: HttpClient, private url: ApiUrlService) {
        this._url = this.url.getUrl();
    }
    getDepartments(): Observable<IDepartment[]> {
        return this.httpClient.get<IDepartment[]>(this._url + `/departments`);
    }
}
