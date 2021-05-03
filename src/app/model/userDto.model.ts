import {  required } from '@rxweb/reactive-form-validators';

export class UserDto {
  @required()
  firstName: string;

  @required()
  lastName: string;

  @required()
  email: string;

  @required()
  monthtlyAdvertisingBudget: number;

  @required()
  phoneNumber: number;
}
