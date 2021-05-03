import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserDto } from '../../model/userDto.model';
import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {
  SearchCountryField,
  TooltipLabel,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
import { PaymentService } from 'src/app/services/payment.service';
import {
  ReactiveFormConfig,
  RxFormBuilder,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  separateDialCode = true;
  searchCountryField = SearchCountryField;
  tooltipLabel = TooltipLabel;
  countryISO = CountryISO;
  phoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.Nigeria,
    CountryISO.UnitedKingdom,
  ];
  dataForm: FormGroup;
  userDto: UserDto;
  submitted = false;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private paymentService: PaymentService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.dataForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      monthlyAdvertisingBudget: ['', Validators.required],
      phone: [undefined, [Validators.required]],
    });
  }

  get dataFormControl() {
    return this.dataForm.controls;
  }

  create() {
    this.submitted = true;
    if (this.dataForm.valid) {
      this.paymentService.submitUserData(this.dataForm.value);
      this.toastr.success('Success', 'User Data Submitted!');
      this.router.navigate(['/user-data']);
    } else {
      this.toastr.error('Please Fill in All Fields', 'Something Went Wrong!', {
        timeOut: 3000,
      });
    }
  }
}
