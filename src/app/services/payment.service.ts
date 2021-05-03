import { UserDtoState } from './../store-state-manager/reducer/userDto.reducer';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { submitUserData } from '../store-state-manager/action/userDto.actions';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private store: Store<UserDtoState>) {}

  submitUserData(value: any): any {
    this.store.dispatch(submitUserData(value));
  }
}
