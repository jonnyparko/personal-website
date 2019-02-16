import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  text = {
'message': 'this is some text'
  };
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/cool-cars');
  }

  send(data) {
    return this.http.post('//localhost:8080/send', JSON.stringify(data), this.httpOptions);
  }
}
