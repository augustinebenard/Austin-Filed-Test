import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import {
  userFeatureKey,
  reducer,
} from '../store-state-manager/reducer/userDto.reducer';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserDataComponent } from './user-data/user-data.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [HomeComponent, UserDataComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    StoreModule.forFeature(userFeatureKey, reducer),
  ],

  providers: [],
})
export class UserModule {}
