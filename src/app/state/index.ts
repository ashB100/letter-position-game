import { compose } from '@ngrx/core';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';
import { gameReducer, StoreState } from './reducer';

const developmentReducer: ActionReducer<StoreState> = compose(storeFreeze, combineReducers)(gameReducer);
const productionReducer: ActionReducer<StoreState> = combineReducers(gameReducer);

export function rootReducer(state: StoreState, action: any): StoreState {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
