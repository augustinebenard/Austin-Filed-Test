import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUsers from './reducer/userDto.reducer';

export interface State {
  users: fromUsers.UserDtoState;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUsers.userReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
