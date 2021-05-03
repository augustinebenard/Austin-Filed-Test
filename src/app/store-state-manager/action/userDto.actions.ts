
import { createAction, props } from '@ngrx/store';
import { UserDto } from 'src/app/model/userDto.model';


export const submitUserData = createAction(
  '[User] Submit User Data',
  (userDto: UserDto) => ({userDto})
);
