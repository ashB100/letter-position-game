import { ActionReducer, Action } from '@ngrx/store';
import { ReducerAction } from '../models/action';

// Actions
export const UPDATE_LETTER = 'UPDATE_LETTER';

// Action Creators
const createUpdateLetterAction = () => {
  return {
    type: UPDATE_LETTER
  };
};

const initialState = {
  letter: 'A',
  answeredQuestions: []
};

export function reducer(state: initialState, action: ReducerAction) {
  switch (action.type) {
    case UPDATE_LETTER:
      return action.letter;

    default:
      return state;
  }
}
