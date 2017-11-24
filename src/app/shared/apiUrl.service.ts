import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiUrlService {
    _url: string;
    constructor(private httpClient: HttpClient) {
        this._url = 'http://localhost:5000/api';
    }
    getUrl() {
        return this._url;
    }

}
