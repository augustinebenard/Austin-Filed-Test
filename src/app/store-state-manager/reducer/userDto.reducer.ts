import {Action, createReducer, on} from '@ngrx/store';
import * as UserActions from '../action/userDto.actions';
import {UserDto} from '../../model/userDto.model';

export const userFeatureKey = 'user';

export interface UserDtoState {
  userDetails: UserDto[];
}

export const initialState: UserDtoState = {
  userDetails: []
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.submitUserData,
    (state: UserDtoState, {userDto}) =>
      ({...state,
        userDetails: [...state.userDetails, userDto]
      }))
);

export function reducer(state: UserDtoState | undefined, action: Action): any {
  return userReducer(state, action);
}
