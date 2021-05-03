import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';

import { selectUsers } from '../../store-state-manager/selector/userDto.selectors';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { PaymentService } from 'src/app/services/payment.service';
import { UserDtoState } from 'src/app/store-state-manager/reducer/userDto.reducer';

interface Budget {
  id: number;
  amount: number;
}

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit, OnDestroy {
  budgets: Budget[] = [
    { id: 0, amount: 120000 },
    { id: 1, amount: 150000 },
    { id: 2, amount: 220000 },
    { id: 3, amount: 250000 },
  ];

  optionForm: FormGroup;

  userData: {};
  data: boolean = false;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private store: Store<UserDtoState>) {
    this.store.select(selectUsers).subscribe((res) => {
      if (res.length) {
        this.data = true;
        console.log('data', res[0]);
        this.userData = res;
      }
    });
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit() {
    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This field is required',
      },
    });
    this.optionForm = new FormGroup({
      option: new FormControl('', Validators.required),
      monthtlyAdvertisingBudget: new FormControl(null, Validators.required),
    });
  }

  next() {}
}
