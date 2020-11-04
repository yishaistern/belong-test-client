import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AppState, PartTower, Tower, TowerState, User } from '../interfaces/model-interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as actions from './actions';





export const adapter: EntityAdapter<Tower> = createEntityAdapter<Tower>({
    selectId: selectUserId
});

export const initialState: TowerState = adapter.getInitialState({
    // additional entity state properties
    currentTower: '',
    loading: false,
    ids: [],
    entities: {}
  });


export function selectUserId(a: PartTower): string {
    return a.id;
  }

export function sortByName(a: Tower, b: Tower): number {
    return a.name.localeCompare(b.name);
}



const towerReducer = createReducer(
    initialState,

    on(actions.getTwoers, (state, { towers }) => {
        return adapter.addMany(towers, state);
    }),
    on(actions.pickTwoer, (state, { towerId }) => {
      return {...state, currentTower: towerId};
    }),
    on(actions.runCall, (state, { done }) => {
        return {...state, loading: !done};
  }),
    on(actions.updateTwoer, (state, { tower }) => {
        // tower.changes.wasUpdated = true;
        return adapter.updateOne(tower, {...state, currentTower: tower.id });
  }),

);

export function reducer(state: TowerState | undefined, action: Action) {
    return towerReducer(state, action);
}

export const selectFeature = createFeatureSelector<AppState, TowerState>('towers');

export const selectTowersIds = createSelector(
    selectFeature,
    (state: TowerState) => state.ids
  );

export const selectTowersEnteties = createSelector(
  selectFeature,
  (state: TowerState) => state.entities
);

export const selectedTower = createSelector(
    selectFeature,
    (state: TowerState) => state.currentTower
  );





