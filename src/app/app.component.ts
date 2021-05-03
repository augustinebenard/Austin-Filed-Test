import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'filed-test';

  constructor() { }

  
  ngOnInit(): void {

    ReactiveFormConfig.set({
      "validationMessage": {
          "required": "This field is required",
          "email":"email is not valid",
      }
  });
  }
}
