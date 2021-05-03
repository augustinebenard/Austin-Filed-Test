import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducer/userDto.reducer';

export const selectUserDtoState = createFeatureSelector<fromUser.UserDtoState>(
  fromUser.userFeatureKey
);

export const selectUsers = createSelector(
  selectUserDtoState,
  (state: fromUser.UserDtoState) => state.userDetails
);
