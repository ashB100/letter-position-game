import { Action } from '@ngrx/store';

export interface ReducerAction extends Action {
  letter: string;
}
