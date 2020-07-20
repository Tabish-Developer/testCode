import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class TestService 
{
  // subject: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  getJsonData()
  {
    return this.http.get('assets/testdata.json');

    /*
    Proper practice: 
    this.http.get('./testdata.json')
    .subscribe((data) => {
      this.subject.next(data);
    },
    (err) => {
      console.warn('Erroneous! Error:', err);
    });
    */
  }
}