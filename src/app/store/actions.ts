import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Tower, User } from '../interfaces/model-interface';

export const logUser = createAction('[Users flow] insert new', props<{newUser: User}>());

/** tower actions  */
export const runCall = createAction('[tower flow] get call', props<{done: boolean}>());
export const getTwoers = createAction('[tower flow] get list', props<{towers: Tower[]}>());
export const pickTwoer = createAction('[tower flow] pick tower', props<{towerId: string}>());
export const updateTwoer = createAction('[tower flow] update tower', props<{tower: Update<Tower>}>());

