import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ContactService {
    constructor(private httpClient: HttpClient) { }

}
