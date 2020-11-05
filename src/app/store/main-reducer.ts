import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AppState, User, MainState } from '../interfaces/model-interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as actions from './actions';






export const initialState: MainState = {
  user: {
    userName: ''
  },
  isApiCallRuning: false
};

const userReducer = createReducer(
    initialState,
    on(actions.logUser, (state, { newUser }) => {
      return {...state, user: newUser};
    }),
    on(actions.runCall, (state, { isAlive }) => {
      return {...state, isApiCallRuning: isAlive};
    }),

);

export function reducer(state: MainState | undefined, action: Action) {
    return userReducer(state, action);
}

export const selectFeature = createFeatureSelector<AppState, MainState>('mainState');

export const selectuserName = createSelector(
  selectFeature,
  (state: MainState) => state.user.userName
);

export const selectloading = createSelector(
  selectFeature,
  (state: MainState) => state.isApiCallRuning
);





