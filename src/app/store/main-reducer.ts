import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AppState, User, UserState } from '../interfaces/model-interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as actions from './actions';






export const initialState: UserState = {
  user: {
    userName: ''
  }
};

const userReducer = createReducer(
    initialState,
    on(actions.logUser, (state, { newUser }) => {
      return {...state, user: newUser};
    }),
  //   on(actions.clearuser, (state) => {
  //     return {...state, currentUser: ''};
  // }),
  //   on(actions.editUser, (state, { userEdited }) => {
  //     return adapter.updateOne(userEdited, state);
  // }),
  //   on(actions.pickUser, (state, { userPicked }) => {
  //     const picked = userPicked.firstName + '_' + userPicked.lastName;
  //     return {...state, currentUser: picked};
  // }),

);

export function reducer(state: UserState | undefined, action: Action) {
    return userReducer(state, action);
}

export const selectFeature = createFeatureSelector<AppState, UserState>('userState');

export const selectuserName = createSelector(
  selectFeature,
  (state: UserState) => state.user.userName
);





