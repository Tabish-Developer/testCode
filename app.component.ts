import { Component } from '@angular/core';
import { TestService } from './soap.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'SOAP Prototype';
  myData: any;
  xmlData: any;
  ObjectKeys: any = Object.keys;

  constructor(private myService: TestService)
  {
    this.myService.getJsonData().subscribe((data) => {
      console.warn(' data received:', data);
      this.myData = data;
    },
    (err) => {
      console.warn('Erroneous! Err:', err);
    });

  }
}
